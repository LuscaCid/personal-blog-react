import { Container, Perfil, Input } from "../Header/style";
import {ListComponent} from '../SearchList'
import imgPerfil from '../../img/perfil.jpg';
import { FaPowerOff } from "react-icons/fa6";
import { useAuth } from "../../hooks/AuthContext";
import {api} from '../../service/api'
import defaultProfile from '../../assets/defaultavatar.png'
import {useEffect, useState} from 'react'
export function Header() {
    const {logout , user} = useAuth()
     
     const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : defaultProfile 

    const [searchedUsers, setSearchedUsers] = useState([]) 
    const [inputSearch, setInputSearch] = useState('')


    useEffect(() => {
        async function fetchData(){
            const response = await api.get(`/followers/searchfollowers?username=${inputSearch}`)
            setSearchedUsers(response.data)
            console.log(searchedUsers)
        }
        if(inputSearch)fetchData()
        else setSearchedUsers([])
        console.log(inputSearch)
    }, [inputSearch])

    const [avatar, setAvatar] = useState(avatarURL)
    return(

        <Container>
            <Perfil>

                <button>
                    <img src={avatar} alt="Foto de Perfil" />
                </button>

                <span>Olá, {user.name}</span>

            </Perfil>

            <Input 
            onChange = {e => setInputSearch(e.target.value)}
            placeholder="Pesquisar usuário"  
            type="text"/>

            <FaPowerOff
            
            cursor={`pointer`}
            onClick={logout}
            color="#dfdfdf"
            />    
            
        </Container>

    );

}