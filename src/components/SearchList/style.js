import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 12px 16px;
  z-index: 222;
  background: white;
  
  .user-info{
    display: flex;
    img{
      width: 30px;
      height: 30px;
    }
  }
`