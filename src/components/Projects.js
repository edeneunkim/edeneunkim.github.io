import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import { alpha } from '@mui/material';
import Calculator from './images/Calculator.png';
import CalculatorDark from './images/Calculator Dark.png';
import AA from './images/AA.png';
import AAdark from './images/AA dark.png';
import WM from './images/WM.png';
import WMdark from './images/WM Dark.png';

function Projects({mode}) {
    const items = [
        {
            title: 'Alex Anonymous',
            description:
                'Alex Anonymous is an iOS app aimed to support users in their recovery from addiction, with features ' +
                'such as a fine-tuned AI chatbot to provide a personalized experience.',
            tech: 'Swift',
            imageLight: AA,
            imageDark: AAdark,
            link: 'https://github.com/Parayeets/AlexAnonymous'
        },
        {
            title: 'iPad Calculator',
            description:
                'An aesthetically designed calculator app designed for iPad devices.',
            tech: 'Swift',
            imageLight: Calculator,
            imageDark: CalculatorDark,
            link: 'https://github.com/edeneunkim/iPad-Calculator'
        },
        {
            title: 'WeaveMaster',
            description:
                'WeaveMaster is a game where the user must dodge incoming projectiles and collect orbs to gain bonuses.',
            tech: 'Java',
            imageLight: WM,
            imageDark: WMdark,
            link: 'https://github.com/edeneunkim/WeaveMaster'
        },
    ];
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

    const handleItemClick = (index) => {
        setSelectedItemIndex(index);
    };

    return (
        <div id='projects' className="projects">
            <p className="sectionTitle text-primary">Projects</p>
            <p className="projSubTitle text-primary">Explore my collection of projects.</p>
            <div className="projContainer">
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <Stack
                            direction="column"
                            justifyContent="center"
                            alignItems="flex-start"
                            spacing={2}
                            useFlexGap
                            sx={{width: '100%', display: 'flex'}}
                        >
                            {items.map(({title, description, tech, link}, index) => (
                                <Card
                                    key={index}
                                    variant="outlined"
                                    component={Button}
                                    onClick={() => handleItemClick(index)}
                                    sx={{
                                        p: 3,
                                        height: 'fit-content',
                                        width: '100%',
                                        background: 'none',
                                        backgroundColor:
                                            selectedItemIndex === index ? (mode ? 'grey.900' : 'action.selected') : undefined,
                                        borderColor: () => {
                                            if (mode) {
                                                return selectedItemIndex === index
                                                    ? 'secondary.dark'
                                                    : 'grey.800';
                                            }
                                            return selectedItemIndex === index ? 'primary.light' : 'grey.300';
                                        },
                                        borderRadius: 3,
                                        ':hover': mode ? {background: alpha('#9575cd', 0.25)} : ''
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: '100%',
                                            display: 'flex',
                                            textAlign: 'left',
                                            flexDirection: {xs: 'column', md: 'row'},
                                            alignItems: {md: 'center'},
                                            gap: 2.5,
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                color: (mode) => {
                                                    if (mode) {
                                                        return selectedItemIndex === index
                                                            ? 'primary.main'
                                                            : 'grey.300';
                                                    }
                                                    return selectedItemIndex === index
                                                        ? 'primary.main'
                                                        : 'grey.700';
                                                },
                                            }}
                                        >
                                        </Box>
                                        <Box sx={{textTransform: 'none'}}>
                                            <p className="text-primary projTitle">
                                                {title}
                                            </p>
                                            <p className="text-primary projDescription">
                                                {description}
                                            </p>
                                            <p className="text-primary projTech">
                                                Technologies: {tech}
                                            </p>
                                            <Link
                                                color={mode ? 'secondary' : 'primary'}
                                                variant="body2"
                                                fontWeight="bold"
                                                sx={{
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    '& > svg': {transition: '0.2s'},
                                                    '&:hover > svg': {transform: 'translateX(2px)'},
                                                }}
                                                onClick={(event) => {
                                                    event.stopPropagation();
                                                }}
                                                href={link}
                                                target="_blank"
                                            >
                                                <span>Learn more</span>
                                                <ChevronRightRoundedIcon
                                                    fontSize="small"
                                                    sx={{mt: '1px', ml: '2px'}}
                                                />
                                            </Link>
                                        </Box>
                                    </Box>
                                </Card>
                            ))}
                        </Stack>
                    </Grid>
                    {/*image box*/}
                    <Grid
                        item
                        xs={12}
                        md={6}
                        sx={{display: 'flex', width: '100%'}}
                    >
                        <Card
                            variant="outlined"
                            sx={{
                                height: '100%',
                                width: '100%',
                                display: 'flex',
                                pointerEvents: 'none',
                                borderColor: () => {
                                    if (mode) {
                                        return 'grey.800'
                                    }
                                    return 'grey.300';
                                },
                                borderRadius: 3
                            }}
                        >
                            <Box
                                sx={{
                                    m: 'auto',
                                    width: 420,
                                    height: 500,
                                    backgroundSize: 'contain',
                                }}
                            />
                            <img className="projImage" src={mode ? items[selectedItemIndex].imageDark : items[selectedItemIndex].imageLight}
                                 alt=""/>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Projects;