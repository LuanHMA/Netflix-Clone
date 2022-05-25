import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    margin-bottom: 30px;

    h2{
        margin-left: 30px;
    }

    @media(max-width: 768px){
        h2{
            margin-left: 20px;
            font-size: 20px;
        }
    }

    .movieArrowLeft,.movieArrowRight{
        font-size: 30px;
        width: 40px;
        height: 225px;
        background: red;
        position: absolute;
        z-index: 990;
        top: 65px;
        display: flex;
        align-items:center;
        justify-content: center;
        cursor: pointer;
        opacity: 0;
        background: rgba(0,0,0,.6);
    }
    .movieArrowLeft{
        left: 0;

    }
    .movieArrowRight{
        right: 0 ;
    }

    @media (max-width: 764px){
        .movieArrowLeft,.movieArrowRight{
            opacity: 1;
        }
    }

`
export const ListArea = styled.div`
    overflow-x: hidden;
    padding-left: 30px;

`
export const List = styled.div`
    transition: all ease .5s;
`
export const ListItem = styled.div`
    display: inline-block;
    width: 200px;

    img{
        width: 100%;
        transform: scale(.9);
        transition: transform .2s ease;
        cursor: pointer; 
        
        &:hover{
            transform: scale(1);
        }
    }
    
`