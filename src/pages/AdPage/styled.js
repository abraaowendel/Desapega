import styled, { keyframes } from 'styled-components';

const animation = keyframes`
    0%{background-color: #ddd;}
    100%{background-color: #eee;}
`
export const Fake = styled.div`
    border-radius: 5px;
    background-color: #ddd;
    height: ${props => props.height || 20}px;
    animation: ${animation} .4s infinite alternate;
`

export const PageArea = styled.div`
     display: flex;
     margin-top: 30px;
     border-radius: 5px;

     .box{
        background-color: #fff;
        border-radius: 5px;
        box-shadow:  0 0 4px #999;
     }
    .leftSide{
        flex: 1;
        margin-right: 20px;
        background-color: #fff;
        border-radius: 8px;
        .box{
            display: flex;
        }
        .adInfo{
            flex: 1;
            padding: 15px 0;
            .adName {
                h2{
                    margin-bottom: 5px;
                }
                small{
                    color: #555;
                }
                margin-bottom: 10px;
            }
            .adDescription{
                p{
                    margin-bottom: 10px;
                }
                small{
                    display: block;
                    margin-top: 10px;
                }
            } 
        }
        
        .adImage {
            width: 345px;
            height: 350px;
            margin-right: 20px;
            border-radius: 5px;
            img{
                width: 100%;
                height: 100%;
                border-radius: 5px 0 0 5px;
                background-size: cover;
            }
        }
       
    }
    
    .rigthSide{
        .contactSeller{
            display: block;
            text-align: center;
            background-color: #E57700;
            padding: 10px;
            margin-bottom: 20px;
            width: 100%;
            border-radius: 5px;
            border: 0;
            cursor: pointer;
            color: #fff;
                text-decoration: none;
                font-size: 18px;
         
            &:hover{
                opacity: 0.9;
            }
        }
        .box--padding{
            min-width: 280px;
            margin-bottom: 20px ;
            padding: 10px;
            display: flex;
            flex-direction: column;
            .price{
                span{
                    font-size: 26px;
                    color: #E57700;
                    font-weight: 600;
                }
             }
            
             strong{
                font-size: 20px;
             }
             small{
                color: #999;
                font-weight: 600;
                margin-top: 10px;
             }
        }
    }
`;

export const OthersArea = styled.div `
    h2{
        margin: 30px 0 15px;
    }
    .list{
        background-color: transparent;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        a{
            text-decoration: none;
        }
    }

`
export const BreadChumb = styled.div `
margin-top: 10px;
    a{
        color: #000;
        margin:0 8px;
    }

`
