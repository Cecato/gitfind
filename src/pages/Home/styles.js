import styled from 'styled-components';

export const RepoStyle = styled.div`

    .conteudo{
        position: relative;
        display: flex;
        align-items: flex-start;

        justify-content: center;
    }

    .info{
        width: 50%;
        margin-right: 90px;
        margin-top: 40px;
        color: #fffF;

    }

    input{
        border: 1px solid rgba(146, 146, 146, 0.767);
        border-radius: 22px;
        min-width: 250px;

        margin-right: 12px;
        width: 80%;
        background: transparent;

        font-size: 18px;
        padding: 10px;
        color: #ffff;
        
        transition: ease-in-out 0.5s;
    }

    input:hover, button:hover{
        border: 1px solid rgba(146, 146, 146, 1);
        background-color: rgba(120, 120, 120, 0.05);
        color: #ffff;
    }

    button{
        border: 1px solid rgba(146, 146, 146, 0.767);
        border-radius: 22px;
        margin-right: 12px;

        background: transparent;
        font-size: 18px;
        padding: 10px;

        color: rgba(146, 146, 146, 1);
        transition: ease-in-out 0.5s;
        cursor: pointer;
    }

    .perfil{
        display:flex;
        margin: 20px;
    }

    .profile{
        width: auto;
        height: 150px;
        border: 2px solid rgba(255, 255, 255, 0.568);

        border-radius: 50%;
        margin-right: 32px;

    }

    .perfil h3{
        color: rgb(255, 255, 255);
        font-size: 24px;
        margin: 0;
    }

    .perfil span{
        color: rgb(255, 255, 255);
        font-size: 14px;
        margin: 0;
    }

    .perfil p{
        display:block;
        color: rgb(255, 255, 255);
        font-size: 14px;
        margin: 20px 0 0 0;
    }

    .repositorio{
        font-size: 32px;
        color: #FFFF;
        margin: 12px 0;
        
        text-align: center;
    }

    .line{
        border-bottom: 2px dashed rgba(233, 233, 233, 0.753);
    }

    @media (max-width: 650px) {

        .conteudo{
            align-items: center;
            justify-content: center;
            position: relative;
            display: contents;
        }

        .info{
            width: 90%;
            margin: 0;
            margin-top: 30px;
            margin-left: 5%;
        }
        
        input{
            width: 90%;
            height: auto;
            margin-left:2%;
        }

        button{
            position:relative;
            margin-left:40%;
            margin-top: 10px;
            margin-bottom: 15px;
        }

        .repositorio{
            margin-right: 50px;
        }
    }

`;