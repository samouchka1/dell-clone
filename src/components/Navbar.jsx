import React from 'react'
import {
    Container,
    Box,
    Typography,
    // TextField,
    InputAdornment,
    FormControl,
    Input
    // Toolbar,
 } from '@mui/material';
//  import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
 import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
 import SearchIcon from '@mui/icons-material/Search';

 const navLinks = [
    {
        id: 1,
        name: 'Sign In',
        image: 'icon-signin.JPG'
    },
    {
        id: 2,
        name: 'Contact Us',
        image: 'icon-contact.JPG'
    },{
        id: 3,
        name: 'US/EN',
        image: 'icon-lang.JPG'
    },{
        id: 4,
        name: 'Cart',
        image: 'icon-cart.JPG'
    },
 ]

const Navbar = () => {
  return (
    <Container maxWidth={false}>
        <Box>
            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '60%'
                    }}
                >
                    <Box>
                        <svg style={{height: '35px', width: '180px', color: '#0063b8'}} class="dellTechLogo mh-show-DeskTop-Tab" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1017 132">
                            <path d="M1015 84.89c0-12.23-6.8-17.66-20.39-20.38-13.58-2.71-21.73-4.08-21.73-13.58 0-6.79 5.43-10.87 14.95-10.87 12.23 0 16.3 5.43 16.3 12.23l1.36 1.36h5.43l1.36-1.36c0-13.58-10.87-19.02-24.46-19.02-14.95 0-23.09 8.15-23.09 17.67 0 10.87 8.15 16.3 21.73 19.02 13.59 2.72 20.38 4.08 20.38 14.95 0 6.79-4.07 12.23-17.66 12.23-12.23 0-17.66-6.8-17.66-14.95l-1.36-1.36h-5.43l-1.36 1.36c0 12.23 9.51 21.74 25.81 21.74 17.66-.02 25.82-8.17 25.82-19.04m-58.42-13.58l1.35-1.36v-4.07c0-19.02-10.87-32.61-29.89-32.61s-29.89 13.59-29.89 32.61v2.71c0 19.02 9.51 35.32 31.25 35.32 19.02 0 25.81-12.23 27.17-20.38l-1.36-1.36h-5.43l-1.36 1.36c-2.72 8.15-8.15 13.59-19.02 13.59-17.67 0-23.1-16.3-23.1-24.45l1.36-1.36h48.92zm-8.15-6.8h-40.76l-1.36-1.36c0-9.51 5.43-23.09 21.74-23.09 16.3 0 21.74 13.58 21.74 23.09l-1.36 1.36zm-59.78 36.68V35.97l-1.36-1.36h-5.43l-1.36 1.36v65.22l1.36 1.36h5.43l1.36-1.36zm0-78.8v-8.15l-1.36-1.36h-5.43l-1.36 1.36v8.15l1.36 1.36h5.43l1.36-1.36zm-51.62 74.73c-13.59 0-21.74-9.51-21.74-28.53s8.15-28.53 21.74-28.53c13.58 0 21.73 9.51 21.73 28.53 0 19.01-8.15 28.53-21.73 28.53m21.73-4.08c0 17.66-4.08 31.25-20.38 31.25-12.23 0-16.3-5.43-17.66-12.23l-1.36-1.36h-5.43l-1.36 1.36c1.36 10.87 9.51 19.02 25.81 19.02 17.67 0 28.53-10.87 28.53-38.04V35.97l-1.36-1.36h-4.08l-1.36 1.36-1.36 8.16h-1.36c-2.71-5.43-9.51-10.87-21.74-10.87-19.02 0-28.53 14.95-28.53 35.33 0 20.37 9.51 35.32 28.53 35.32 12.23 0 19.02-5.43 21.74-10.87h1.37zm-88.3-52.98c13.58 0 23.09 10.87 23.09 28.53s-9.51 28.53-23.09 28.53c-13.59 0-23.1-10.87-23.1-28.53s9.51-28.53 23.1-28.53m0 63.85c17.66 0 31.24-12.23 31.24-35.32s-13.58-35.33-31.24-35.33c-17.67 0-31.25 12.23-31.25 35.33 0 23.09 13.59 35.32 31.25 35.32m-40.76-2.72V8.81l-1.36-1.36h-5.43l-1.36 1.36v92.39l1.36 1.36h5.43l1.36-1.37zm-48.9-61.13c13.58 0 23.09 10.87 23.09 28.53s-9.51 28.53-23.09 28.53c-13.59 0-23.1-10.87-23.1-28.53s9.51-28.53 23.1-28.53m0 63.85c17.66 0 31.25-12.23 31.25-35.32s-13.59-35.33-31.25-35.33-31.25 12.23-31.25 35.33c0 23.09 13.59 35.32 31.25 35.32m-39.4-2.72V60.43c0-17.66-9.51-27.17-24.45-27.17-9.51 0-17.67 4.08-21.74 10.87h-1.36l-1.35-8.16-1.36-1.36h-4.08l-1.36 1.36v65.22l1.36 1.36h5.44l1.35-1.36V64.51c0-14.95 6.8-24.45 21.74-24.45 10.87 0 17.66 6.79 17.66 20.37v40.76l1.36 1.36h5.43l1.36-1.36zm-69.29 0V60.43c0-17.66-9.51-27.17-24.45-27.17-9.51 0-17.66 4.08-21.74 10.87h-1.36V8.81l-1.36-1.36h-5.43l-1.36 1.36v92.39l1.36 1.36h5.43l1.36-1.36V64.51c0-14.95 6.8-24.45 21.74-24.45 10.87 0 17.66 6.79 17.66 20.37v40.76l1.36 1.36h5.44l1.35-1.36zm-116.83-32.6c0-19.02 9.51-28.53 23.09-28.53s19.02 8.15 20.37 16.3l1.36 1.36h5.44l1.36-1.36c-1.36-13.58-12.23-23.09-28.53-23.09-17.66 0-31.24 10.87-31.24 35.33 0 24.45 13.58 35.32 31.24 35.32 16.3 0 27.17-9.51 28.53-23.09l-1.36-1.36h-5.44l-1.36 1.36c-1.36 8.15-6.79 16.3-20.37 16.3-13.59-.01-23.09-9.53-23.09-28.54m-14.95 2.72l1.36-1.36v-4.07c0-19.02-10.87-32.61-29.9-32.61-19.01 0-29.89 13.59-29.89 32.61v2.71c0 19.02 9.51 35.32 31.25 35.32 19.02 0 25.81-12.23 27.17-20.38l-1.36-1.36h-5.43l-1.36 1.36c-2.71 8.15-8.15 13.59-19.02 13.59-17.66 0-23.09-16.3-23.09-24.45l1.36-1.36h48.91zm-8.15-6.8h-40.76l-1.36-1.36c0-9.51 5.43-23.09 21.73-23.09 16.31 0 21.74 13.58 21.74 23.09l-1.35 1.36zm-36.61-51.63V8.81l-1.36-1.36h-70.65l-1.36 1.36v4.08l1.36 1.36h29.89l1.36 1.36v85.59l1.36 1.36h5.43l1.36-1.36V15.6l1.36-1.36h29.89l1.36-1.36zM322.2 83.65v18.9h-61.35V7.45h21.6v76.2h39.75zm-283.65 18.9c22.13 0 40.73-15.12 46.03-35.58l53.8 42.03 53.77-42.01v35.56h61.35v-18.9h-39.75V7.45h-21.6v35.56L140.58 83.3l-11.53-9.01L153.73 55l26.88-21-15.34-12-51.58 40.3-11.53-9.01L153.73 13 138.38 1l-53.8 42.03c-5.3-20.46-23.9-35.58-46.03-35.58H0v95.1h38.55zM21.6 83.65v-57.3h16.95C52.88 26.35 64.5 39.18 64.5 55S52.88 83.65 38.55 83.65H21.6z"></path>
                        </svg>
                    </Box>
                    <FormControl sx={{width: 600 ,maxWidth: '100%'}}>
                        <Input
                            id=""
                            placeholder="Search Dell"
                            sx={{p: 0}}
                            variant="outlined"
                            endAdornment={
                                <InputAdornment position="end">
                                    <SearchIcon />
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                </Box>
                <Box sx={{display: 'flex'}}>
                    {navLinks.map((link) => (
                        <Box 
                            key={link.id} 
                            sx={{
                                display: 'flex', 
                                alignItems: 'center', 
                                p:'.25rem',
                                fontFamily: 'roboto, Arial, Helvetica, sans-serif', 
                                color: '#636363', 
                                '&:hover':{ color: '#000'},
                            }}
                        >
                            <Box 
                                component="img"
                                atl={link.name}
                                src={'src/assets/icons/' + link.image}
                                sx={{
                                    height: '1.3rem', 
                                    width:'1.2rem',
                                    p: '.15rem .25rem'
                                }}
                            />
                            <Typography sx={{fontSize: '.9rem'}}>{link.name}</Typography>
                            <KeyboardArrowDownIcon fontSize="small" />
                        </Box>
                    ))}
                    
                </Box>
            </Box>
        </Box>
    </Container>
  )
}

export default Navbar