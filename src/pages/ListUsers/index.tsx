import React,{useState, useEffect} from 'react';
import { AxiosResponse } from 'axios';
import Header from '../../components/Header'
import Footer from '../../components/Footer'

import { Table, Skeleton, Button, Modal, Space, Avatar } from 'antd';

import api from '../../services/api'

import { Users } from '../../types/users'
import { Data } from '../../types/data'

import * as C from './styled';

const ListUsers: React.FC = () => {

  const [ patients, setPatients ] = useState<Users[]>([]);
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [ModalDetails, setModalDetais] = useState<Users[]>([]);

  
  useEffect(()=> {
    api.get('/?results=250').then((response: AxiosResponse) => {
        setPatients(response.data.results);
        setLoading(true)
        console.log(response.data.results);
    });
  },[])
  
  const data = patients.map((res) => {
    return ({
      name: `${res.name.first} ${res.name.last}`,
      gender: res.gender,
      age: res.dob.age,
      address: res.location.street.name,
      nationality: res.location.country,
      uuid: res.login.uuid

    })
   
  });
  
  const columns: any = [
    
    {
      title: 'Name',
      dataIndex: 'name',
      filters: patients.map(res => {
          return ({
            text: `${res.name.first}`,
            value: `${res.name.first}`,
          })}),
      onFilter: (value: string, record: Data) => record.name.startsWith(value),
      filterSearch: true,
      width: '30%',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      filters: [
        { text: 'Male', value: 'male' },
        { text: 'Female', value: 'female' },
      ],
      onFilter:(value:string, record: Data) => {
        return record.gender === value
      }
    },
    {
      title: 'Age',
      dataIndex: 'age',
      sorter: (a: any, b: any) => a.age - b.age,
    },
    {
      title: 'Nationality',
      dataIndex: 'nationality',
      filters: patients.map(res => {
        return ({
          text: `${res.location.country}`,
          value: `${res.location.country}`,
        })}),
      filterSearch: true,
      onFilter: (value: string, record: Data ) => record.nationality.startsWith(value),
      width: '40%',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      filters: patients.map(res => {
        return ({
          text: `${res.location.street.name}`,
          value: `${res.location.street.name}`,
        })}),
        filterSearch: true,
      onFilter: (value: any, record:Data) => record.address.startsWith(value),
      width: '40%',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'x',
      render: (text:any, record:Data) => (
        <Space size="middle">
          <Button onClick={() => {onClickGoToUserDatails(record.uuid)}}>Detalhes</Button>
        </Space>
      ),
      }
  ];
 
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const onClickGoToUserDatails = (id:string) => {
    showModal()
    patients.filter((res) => res.login.uuid === id).map(res=> {
      setModalDetais([res])
      console.log(res)
    })
};

  return (
      <>
      <C.Container>
        <Header/>
        <C.Main>
          { 
          loading ? (
          
          <Table 
          columns={columns} 
          dataSource={data} 
          />
          ): (
            <>
            <Skeleton active={true} avatar/>
            <Skeleton active={true} avatar/>
            <Skeleton active={true} avatar/>
            <Skeleton active={true} avatar/>
            <Skeleton active={true} avatar/>
            <Skeleton active={true} avatar/>
            </>
          )
        }
        <Modal visible={isModalVisible} width={1000} footer={null} centered  onOk={handleOk} onCancel={handleCancel}>
          {ModalDetails.map(response => {
            return (
               <C.ContainerModal>
                 <C.Img>
                 <Avatar src={response.picture.large}
                        size={{
                          xs: 100,
                          sm: 100,
                          md: 100,
                          lg: 100,
                          xl: 150,
                          xxl: 180,
                        }}
                  />
                </C.Img>  
                <br />
                <p>{response.name.first} {response.name.last}</p>  
                <hr />  
                <p>{response.email}</p>
               </C.ContainerModal>
            )
          }
           
          )}
        </Modal>
        </C.Main>
        <Footer/>
      </C.Container>
      
      </>
  );
}

export default ListUsers;