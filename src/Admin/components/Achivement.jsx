import { Button, Card, CardContent, Typography, styled } from '@mui/material'
import React from 'react'

const TrignleImg = styled("img")({
    right:0,
    bottom:0,
    height:170,
    position:"absolute"
})

const TrophyImg = styled("img")({
    right:36,
    bottom:20,
    height:98,
    position:"absolute"
})

const Achivement = () => {
    return (
        <Card className='' sx={{position:"relative"}}>
            <CardContent>
                <Typography variant='h6' sx={{letterSpacing:".25px"}}>
                    Ebook-Vread
                </Typography>
                <Typography variant='body2'>Congratulations</Typography>
                <Typography variant='h5' sx={{my:3.1}}></Typography>

                <Button size='small' variant='contained'>View Sales</Button>

                <TrignleImg src=''></TrignleImg>
                <TrophyImg src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ZbXY7J3Ksp2mHgz8waxMNll-lU7o3ROz8w&usqp=CAU'/>
            </CardContent>
        </Card>
    )
}

export default Achivement