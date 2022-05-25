import styled from 'styled-components';

export const Container = styled.header`
    
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: transparent;
    height: 70px;
    z-index: 999;
    display: flex;
    justify-content: space-between;
    align-items:center;
    padding-left: 30px;
    padding-right: 30px;
    transition: all ease .5s;
    

    .header-user{
        height: 50px;
        a img{
            height: 100%;
            border-radius: 3px;
        }
    }
`