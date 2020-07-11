import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { debounce } from 'lodash';
import {
  Grid,
  TextField,
  List,
  ListItem,
  ListItemText,
  Divider,
  ListItemAvatar,
  Avatar,
} from '@material-ui/core';
import { searchAction } from '../../store/actions';

const Dashboard = () => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search.searchList);
  const [planetList, setPlanetList] = React.useState([]);

  React.useEffect(() => {
    if (search) {
      console.log('search :', search);
      search.sort((planet1, planet2) => {
        return planet1.population - planet2.population;
      });
      setPlanetList(search);
    }
  }, [search]);

  const handleSearch = debounce((value) => {
    dispatch(searchAction(value));
  }, 500);

  const renderName = (name, index) => {
    return (
      <span style={{ fontSize: `${index + 12} !important` }}>
        {name}
      </span>
    );
  };
  const renderDetails = (planet) => {
    return (
      <>
        <Grid>Population : {planet.population}</Grid>
        <Grid>Rotation Period :{planet.rotation_period}</Grid>
        <Grid>Climate : {planet.climate}</Grid>
      </>
    );
  };

  return (
    <>
      <Grid item md={12} style={{ padding: '1em' }}>
        <TextField
          id="search"
          label="Search"
          placeholder="Search planet here"
          onChange={(e) => handleSearch(e.target.value)}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
      </Grid>
      <Grid item md={12}>
        <List>
          {planetList &&
            planetList.map((planet, index) => (
              <>
                <ListItem key={planet.name}>
                  <ListItemAvatar>
                    <Avatar>{planet.name.substr(0, 2)}</Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={renderName(planet.name, index)}
                    secondary={renderDetails(planet)}
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
              </>
            ))}
        </List>
      </Grid>
    </>
  );
};

export default Dashboard;
