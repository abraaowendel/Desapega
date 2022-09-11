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
        .link{
            span{
                font-weight: bold;
                font-size: 2em;
                letter-spacing: 3px;
            }
            span:nth-child(1){ color: #ff0000; }
            span:nth-child(2){ color: #00ff00; }
            span:nth-child(3){ color: #0000ff; }
        } 
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
                a{
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

