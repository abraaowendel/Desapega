import styled from 'styled-components';

export const PageArea = styled.div`
    margin: 35px 0;
    .box{
        max-width: 500px;
        margin: 10px auto;
        min-height: 420px;
        background-color: #FFF;
        box-shadow: 0 0 3px #999;
        h1{
            text-align: center;
            padding: 30px 0 10px;
            color: #DF7229;
            border-bottom: 1px solid #DF7229;
            margin: 10px 40px;
        }
        form{
            .area--check{
                display: flex;
                justify-content: end;
                padding: 0px 40px;
                margin-top: 20px;
                .area--input{
                    input{
                        accent-color: #DF7229;
                        cursor: pointer;
                    }
                }      
                .area--title{
                    cursor: pointer;

                    user-select: none;
                    margin-right: 6px;
                    font-size: 14.8px;
                    color: #798082;
                }     
            }
           
            .area{
                display: flex;
                flex-direction: column;
                padding: 0px 40px;
                width: 100%;
                .state{
                    display: flex;
                    align-items: center;
                    select{
                        display: block;
                        height: 20px;
                        width: 20px;
                        margin: 6px 0 0;
                    }
                    .area--title{
                        margin-right: 5px;
                    }
                    
                }
                .area--title{
                    color: #DF7229;
                    margin: 15px 0 10px;
                    font-weight: 700;
                    font-size: 15px;
                }

                .area--input{
                    input{
                        width: 100%;
                        padding: 12px 8px; 
                        border: 1px solid #CCC;
                        outline: none;
                        transition: all ease .3s;
                        border-radius: 5px;
                        &:focus{
                            border-color: #DF7229;
                        }
                        &::placeholder{
                            font-size: 15px;
                        }
                    }
                }
             
                button{
                    margin: 20px auto;
                    width: 100%;
                    cursor: pointer;
                    background-color: #DF7229;
                    border: 0;
                    outline: 0;
                    padding: 10px;
                    color:#FFF;
                    font-size: 15px;
                    border-radius: 3px;
                    transition: all ease .2s;
                    &:hover{
                        opacity: 0.9;
                    }
                }
            }
    }
}
`

