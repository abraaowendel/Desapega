import styled from 'styled-components';

export const HeaderArea = styled.header`
    background-color: #f0f0f0;
    border-bottom: 1px solid #cecece;
    height: 70px;
    a{
      text-decoration: none;
      color: unset;
    }
    .container{
        display: flex;
        justify-content: space-between;
        margin: auto;
        max-width: 1100px;
    }
    .logo{
        display: flex;
        align-items: center;
        height: 70px;
    }
    nav{
        padding: 10px 0;
        ul, li{
            list-style: none;
        }
        ul{
            display: flex;
            align-items: center;
            height: 50px;
            li{
                margin: 0 20px;
                a, button{
                    outline: none;
                    border: 0;
                    cursor: pointer;
                    color: #000;
                    font-size: 15px;
                    transition: .2s all ease-in;
                    &:hover{
                        color: #999;
                    }
                    &.button{
                        background-color: #FF8100;
                        color: #FFF;
                        padding: 7px 10px;
                        border-radius: 4px;
                        &:hover{
                            background-color: #E57700;
                        }
                    }
                }
            }
        }
        
    }
    

    
`;

