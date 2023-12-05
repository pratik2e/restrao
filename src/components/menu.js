import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from 'next/image';
import { Button, Menu, MenuItem } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Fab from '@mui/material/Fab';
import foodData from './food.json'; // Assuming the JSON file is in the correct path

export default function Menulist() {
  const [expanded, setExpanded] = React.useState(
    foodData.map((_, index) => `panel${index + 1}`)
  );
  const [anchorEl, setAnchorEl] = React.useState(null);
  const accordionTitles = ['Burger', 'Pizza', 'Drinks', 'Starter'];

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(
      isExpanded
        ? [...expanded, panel]
        : expanded.filter((item) => item !== panel)
    );
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const scrollToSection = (index) => {
    setExpanded([`panel${index + 1}`]); // Open the specific accordion

    const element = document.getElementById(`panel${index + 1}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      handleClose();
    }
  };

  return (
    <div>
      <div className='text-center mb-2 mt-2 text-black items-center font-extrabold'>
        Menu
      </div>
      <div>
        {foodData.map((item, index) => (
          <Accordion key={index} expanded={expanded.includes(`panel${index + 1}`)} onChange={handleChange(`panel${index + 1}`)}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index + 1}bh-content`}
              id={`panel${index + 1}bh-header`}
            >
              <Typography>
                {accordionTitles[index]}
              </Typography>
            </AccordionSummary>
            <AccordionDetails id={`panel${index + 1}`}>
              <div className='flex flex-row space-x-6 self-auto'>
                <div>
                  <Image
                    src={item.image}
                    width={200}
                    height={200}
                    alt="Food"
                  />
                </div>
                <div>
                  <div>
                    <Typography variant="body1" gutterBottom>
                      {item.description}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                    {item.rating}
                    </Typography>
                  </div>
                  <div className="mt-4 ">
                    <Button variant="contained" color="primary" onClick={() => scrollToSection(index)}>
                      Add
                    </Button>
                  </div>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
      <div className='fixed bottom-0 right-0 p-4'>
        <Fab color="primary" aria-label="Menu" onClick={handleMenuClick}>
          <MenuBookIcon />
        </Fab>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {accordionTitles.map((title, index) => (
            <MenuItem key={index} onClick={() => scrollToSection(index)}>
              {title}
            </MenuItem>
          ))}
        </Menu>
      </div>
    </div>
  );
}




