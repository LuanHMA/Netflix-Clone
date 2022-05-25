import styled from 'styled-components';

export const Container = styled.section`
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-image: url(${props => `${props.background}`});

   
    .feature-y{
        width: inherit;
        height: inherit;
        background: linear-gradient(to top, #111 10%, transparent 90%);

        .feature-x{
            width: inherit;
            height: inherit;
            background: linear-gradient(to right, #111 20%, transparent 80%);
            display: flex;
            flex-direction: column;
            justify-content:center;
            padding-left: 30px;
            padding-bottom: 100px;
            padding-top: 70px;

           
        }
    }
    .feature-name {
        h1  {
            font-size: 60px;
            font-weight: bold;
        }
        
    }
    .feature-info{
        font-size: 18px;
        font-weight: bold;
        margin-top: 15px;
        display: flex;

        .feature-points{
            color: #46d369;
            margin-right: 15px;
        }

        .feature-year{
            margin-right: 15px;
        }
    }
    .feature-description{
        margin-top: 15px;
        color: #999;
        font-size: 20px;
        max-width: 35%;
        max-height: 40%;
        white-space: pre-wrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .feature-buttons{
        margin-top: 15px;
        margin-bottom: 15px;
        
        a{
            display: inline-block;
            font-size: 20px;
            font-weight: bold;
            padding: 12px 25px;
            border-radius: 5px;
            text-decoration: none;
            margin-right: 10px;
            opacity: 1;
            transition: opacity .3s ease;

            &:hover{
                opacity: 0.7
            }
        }
        .watch-button{
            background: #fff;
            color: #000;
        }
        .list-button{
            background: #333;
            color: #fff;
        }
    }
    .feature-generos{
        font-size: 18px;
        color: #999;
    }

     @media(max-width: 768px){
        .feature-name h1 { font-size: 40px };
        .feature-info { font-size: 16px };
        .feature-description { font-size: 14px; max-width: 100%; margin-right: 30px; color: #fff };
        .feature-buttons a { font-size: 16px };
        .feature-generos { font-size: 14px; }
    }

`