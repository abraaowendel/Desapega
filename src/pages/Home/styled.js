import styled from 'styled-components';

export const SearchArea = styled.div`
    border-bottom: 1px solid #ccc;
    background-color: #FF8100;
    padding: 20px 0;
    .searchBox{
        padding: 20px 15px;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 1px 1px 1px 0.3px rgba(0,0,0,0.2);

        display: flex;
        form{
            flex: 1;
            display: flex;
            input, select{
                height: 40px;
                border: 0;
                border-radius: 5px;
                font-size: 15px;
                color: #000;
                margin-right: 20px;
                outline: none;
            }
            input{
                flex: 1;
                padding: 0 10px;
                background-color: #FF8100;
                color: #fff;
                ::placeholder{
                    color: #fff;
                }
            }
            select{
                background-color: #eee;
                color: #000;
                width: 75px;
                padding: 0 15px;
                border: 1px solid #fff;
            }
            button{
                height: 40px;
                padding: 0 20px;
                border-radius: 5px;
                background-color: #eee;
                border: 0;
                cursor: pointer;
                color: #444;
                font-size: 16px;
                transition: .3s all ease-in-out;
                &:hover{
                    background-color: #FF8100;
                    color: #fff;
                }
            }
        }
    }
    .categoryList{
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 30px;
        .categoryItem:nth-child(1){
            border-radius: 10px 0 0 10px;
        }
        .categoryItem:nth-child(4){
            border-radius: 0 10px 10px 0;
        }
        .categoryItem{
            padding: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 25%;
            min-height: 50px;
            text-decoration: none;
            color: #000;
            background-color: #fff;
            &:hover{
                span{
                    color: #666;
                }
            }
            span{
                margin-left: 15px;
            }
            img{
                width: 45px;
                height: 45px;
            }
        }
    }
`;

export const PageArea = styled.div`
    .list{
        display: flex;
        flex-wrap: wrap;
        margin-top: 20px;
        gap: 25px 0px;
        div{
            flex: 1;
            width: 100%;
        }
    }
   
    h2{
        font-size: 25px;
        margin-top: 20px;
    }
    .seeAllLink{
        display: block;
        text-align: center;
        text-decoration: none;
        color: #000;
        cursor: pointer;
        width: 130px;
        margin: 0px auto;
        padding: 10px;
        border-radius: 5px;
        background-color: #FF8100;
        color: #fff;
        margin-top: 30px;
    }
`;