import React, { useState } from 'react'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import styled from 'styled-components'
import Card from './Card'

import image from '../assets/header.jpg'

import {contestants} from '../data/contestants'

const Hero = () => {
  const [search, setSearch] = useState("");

  return (
    <Container>
      <Wrapper>
        <Header>
          <Left>
            <Title>Kalasha 2022</Title>
          </Left>
            <Countdown>
              <Unit>
                <Amount>10</Amount>
                <Description>Days</Description>
              </Unit>
              <Unit>
                <Amount>00</Amount>
                <Description>Hours</Description>
              </Unit>
              <Unit>
                <Amount>00</Amount>
                <Description>Minutes</Description>
              </Unit>
              <Unit>
                <Amount>00</Amount>
                <Description>Seconds</Description>
              </Unit>
            </Countdown>
        </Header>

        <Polls>
          <Subtitle>Vote for your favorite contestant</Subtitle>
          <Search>
            <SearchRoundedIcon />
            <Input type="search" placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
          </Search>
          <Cards>
            {contestants.filter(user => user.name.includes(search)).map(user => (
              <Card user={user} key={user.index} />
            ))}
          </Cards>
        </Polls>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
    padding: 3rem 1rem;
    min-height: 80vh;
    position: relative;

    &::after {
      position: absolute;
      content: "";
      z-index: -1;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-image: linear-gradient(0deg, rgba(0, 0, 0, .9), rgba(0, 0, 0, .9)), url(${image});
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
    }
`

const Wrapper = styled.div`
  max-width: 1360px;
  margin: 0 auto;
  `

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(231, 231, 231, .2);

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`

const Left = styled.div`
  
`

const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 700;
  color: var(--white);
`

const Subtitle = styled.h2`
  font-size: 1.2rem;
  opacity: .7;
  color: var(--white);
  text-align: center;
  margin-bottom: 1rem;
`

const Countdown = styled.div` 
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  gap: 1rem;
`

const Unit = styled.div`
  background-color: #e4e3e3;
  box-shadow: 2px 4px 8px rgba(0,0,0, .8);
  padding: 0.5rem .6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 0.3rem;
`

const Amount = styled.h1`
  font-size: 2rem;
`

const Description = styled.p`
  opacity: .7;
  font-weight: 600;
  font-size: 1rem;
`

const Polls = styled.div`
  margin-top: 2rem;
`

const Search = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 2rem auto;
  background-color: #e9e9e9;
  width: 25vw;
  border-radius: 0.3rem;
  padding-left: .5rem;
  `

const Input = styled.input`
  padding: 0.65rem .7rem;
  border: none;
  outline: none;
  font-size: 1rem;
  width: 100%;
  border-top-right-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;
  margin-left: 0.4rem;
`

const Cards = styled.div`
  width: 100%;
  top: 12rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`

export default Hero