import styled from 'styled-components'

import {Contacts, FactCheck, LocationOn} from '@styled-icons/material'
import { Whatsapp} from '@styled-icons/simple-icons'
import {Email, Phone, Cake} from '@styled-icons/material-outlined'
import {User} from '@styled-icons/boxicons-regular'
import {GenderFemale, GenderMale} from '@styled-icons/bootstrap'

export const Location = styled(LocationOn)`
  color: #0077C0;
  width: 50px;
`
export const Contact = styled(Contacts)`
  color: #0077C0;
  width: 50px;
`
export const Fact = styled(FactCheck)`
  color: #0077C0;
  width: 50px;
`
export const EmailIcon = styled(Email)`
  color: #0077C0;
  width: 20px;
  margin-right: 10px;
`
export const WhatsappIcon = styled(Whatsapp)`
  color: #0077C0;
  width: 20px;
  margin-right: 10px;
`
export const PhoneIcon = styled(Phone)`
  color: #0077C0;
  width: 20px;
  margin-right: 10px;
`
export const UserIcon = styled(User)`
  color: #0077C0;
  width: 20px;
  margin-right: 10px;
`
export const GenderFemaleIcon = styled(GenderFemale)`
  color: #0077C0;
  width: 20px;
  margin-right: 10px;
`
export const GenderMaleIcon = styled(GenderMale)`
  color: #0077C0;
  width: 20px;
  margin-right: 10px;
`
export const CakeIcon = styled(Cake)`
  color: #0077C0;
  width: 20px;
  margin-right: 10px;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const Main = styled.div`
    margin: 50px auto;
    width: 80%;
    height: 80vh;
    padding: 0 50px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    overflow-y: scroll;
`
export const ContainerModal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`
export const Img = styled.div`
    margin-top: -70px;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    
`
export const ContainerCards = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 40vh;
    
`
export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width:100%;
    margin: 5px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    
`
export const P = styled.p`
    font-size: 1.4rem;
    font-weight: bold;
    color: #0077C0;
    padding: 0 20px;
    border-radius: 8px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    
`
export const CardHeader = styled.div`
    background-color: #0077C0;
    width: 100%;
    margin-bottom: 20px;
    padding: 8px;
    text-align: center;
    color: #FFFFFF;
    font-size:1.2rem;
    
`
export const SubCard = styled.div`
    margin: 20px;
    width: 100%;
    padding: 6px;
    height: 100%;
    
`
export const Ul = styled.ul`
    list-style: none;
    margin-top: 30px;
    
`
export const Li = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
    
`
export const Span = styled.span`
    border: 1px solid rgba(0, 119, 192, 0.48);
    padding: 4px;
    border-radius: 4px;
    color: #0077C0;
    font-weight: 500;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    
`


