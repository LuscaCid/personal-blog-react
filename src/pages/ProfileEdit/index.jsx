import { Container, Content , Button} from "./style";
import Perfil from '../../img/perfil.jpg'
import { Input } from "../../components/Input";

import { IoArrowBackSharp } from "react-icons/io5";
import { FaPen } from "react-icons/fa";

export function ProfileEdit() {

    return(

        <Container>
        
            <Content>
                <div>
                    <Button> <IoArrowBackSharp color="#dfdfdf"  /> </Button>
                    <a href="#">Excluir conta</a>
                </div>

                    <button id='profile'>
                        <img src={ Perfil } alt="Foto de perfil" />
                        <p>Editar <hr /> foto <FaPen /> </p>
                    </button>


                <div>

                    <div>
                        <label htmlFor="user">Usuário: </label>
                        <Input id='user' type='text' placeholder='Nome de usuário' />
                    </div>

                    <div>
                        <label htmlFor="nick">Nickname: </label>
                        <Input id='nick' type='text' placeholder='Nickname' />
                    </div>

                    <div>
                        <label htmlFor="email">Email: </label>
                        <Input id='email' type='email' placeholder='Email' />
                    </div>

                    <div>
                        <label htmlFor="senha">Senha: </label>
                        <Input id='senha' type='password' placeholder='Senha' />
                    </div>

                    <div>
                        <label htmlFor="confirmar-senha">Confirmar senha: </label>
                        <Input id='confirmar-senha' type='password' placeholder='Confirmar senha' />
                    </div>

                </div>
            </Content>

        </Container>

    );

}