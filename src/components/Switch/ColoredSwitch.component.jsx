import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles(() => ({
  label: {
    whiteSpace: 'nowrap',
    fontSize: '1rem',
  },
}));
const ColoredSwitch = (props) => {
  const classes = useStyles();

  const { switchColor, label, checkedColor, toggleSwitch, checked } = props;

  const CustomSwitch = withStyles({
    switchBase: {
      color: switchColor,
      '&$checked': {
        color: checkedColor || switchColor,
      },
      '&$checked + $track': {
        backgroundColor: checkedColor || switchColor,
      },
    },
    checked: {},
    track: {},
  })(Switch);

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <CustomSwitch
            checked={checked}
            onChange={toggleSwitch}
            name="customSwitch"
            id="customSwitch"
          />
        }
        label={label}
        classes={{
          label: classes.label,
        }}
      />
    </FormGroup>
  );
};

export default ColoredSwitch;
