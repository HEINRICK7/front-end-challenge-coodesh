import React,{useState, useContext} from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import 'antd/dist/antd.css';
import { Table, Skeleton, Button, Modal, Space, Avatar } from 'antd'

import { Users } from '../../types/users'
import { Data } from '../../types/data'

import {GlobalStateContext}  from '../../GlobalContext/GlobalStateContext'

import * as C from './styled';

import * as Icon from './styled'

import moment from 'moment';

const ListUsers: React.FC = () => {
  const {patients, loading} = useContext(GlobalStateContext)

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [ModalDetails, setModalDetais] = useState<Users[]>([])

  moment.locale('pt-br')

  const data = patients.map((res) => {
    return ({
      name: `${res.name.first} ${res.name.last}`,
      gender: res.gender,
      birth: moment(res.dob.date).format("DD/MM/YYYY"),
      address: res.location.street.name,
      nationality: res.location.country,
      uuid: res.login.uuid,

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
          })
      }),
      onFilter: (value: string, record: Data) => {
        return record.name.startsWith(value)},
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
      filterSearch: true,
      title: 'Birth',
      dataIndex: 'birth',
      onFilter:(value:string, record: Data) => {
        return record.birth === value
      }
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
    patients.filter((res) => res.login.uuid === id).map(res=> (
      setModalDetais([res])
    ))
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
        <Modal visible={isModalVisible} width={1200} footer={null} centered  onOk={handleOk} onCancel={handleCancel}>
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
                <C.P>{response.name.title}: {response.name.first} {response.name.last}</C.P>   
                <C.ContainerCards>
                  <C.Card>
                    <C.CardHeader>
                      Contact
                    </C.CardHeader>
                    <Icon.Contact/>
                    <C.SubCard>
                      <C.Ul>
                        <C.Li>
                          <Icon.WhatsappIcon/> 
                          <C.Span>
                            {response.cell}
                          </C.Span>
                          
                        </C.Li>
                        <C.Li>
                          <Icon.PhoneIcon/> 
                          <C.Span>
                            {response.phone}
                          </C.Span>
                          
                        </C.Li>
                        <C.Li>
                          <Icon.EmailIcon/> 
                          <C.Span>
                            { response.email}
                          </C.Span>
                          
                        </C.Li>
                      </C.Ul>
                    </C.SubCard>
                  </C.Card>
                  <C.Card>
                  <C.CardHeader>
                      Profile
                  </C.CardHeader>
                    <Icon.Fact/>
                    <C.SubCard>
                      <C.Ul>
                        <C.Li>
                          <Icon.UserIcon/> 
                          <C.Span>
                            {response.name.first} {response.name.last}
                          </C.Span>
                          
                        </C.Li>
                        <C.Li>
                          {response.gender === 'female' ? (
                             <Icon.GenderFemaleIcon/> 
                          ): <Icon.GenderMaleIcon/>}
                         
                          <C.Span>
                            {response.gender}
                          </C.Span>
                          
                        </C.Li>
                        <C.Li>
                          <Icon.CakeIcon/> 
                          <C.Span>
                            { moment(response.dob.date).format("DD/MM/YYYY")}
                          </C.Span>
                          
                        </C.Li>
                      </C.Ul>
                    </C.SubCard>
                  </C.Card>
                  <C.Card>
                  <C.CardHeader>
                      Localization
                    </C.CardHeader>
                    <Icon.Location/>
                    <C.SubCard>
                      <C.Ul>
                        <C.Li>
                          <Icon.MapIcon/> 
                          <C.Span>
                            {response.location.country}
                          </C.Span>
                          
                        </C.Li>
                        <C.Li>
                          <Icon.LocationCityIcon/> 
                          <C.Span>
                            {response.location.street.name}, {response.location.city}, {response.location.state}, {response.location.street.number}
                          </C.Span>
                          
                        </C.Li>
                        <C.Li>
                          <Icon.SignpostIcon/> 
                          <C.Span>
                            { response.location.postcode}
                          </C.Span>
                          
                        </C.Li>
                      </C.Ul>
                    </C.SubCard>
                  </C.Card>
                </C.ContainerCards>
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