import styled from 'styled-components';

export const Item = styled.div`
    flex: 1;
    min-width: 237px;
    max-width: 237px;
    background-color: #fff;
    border: 1px solid #fff;
    padding: 10px;
    border-radius: 8px;
    &:hover{
        border-color: #888;
    }
    a{
        height: 100%;
        text-decoration: none;
    }
    .itemImage img{
        width: 100%;
        height: 200px;
    }
    .itemName{
        text-align: center;
        color: #FF8100;
        font-size: 16px;
        margin: 3px 0;
    }
    .itemPrice{
        text-align: center;
        color: #000;
        font-size: 14px;
    }
`;

