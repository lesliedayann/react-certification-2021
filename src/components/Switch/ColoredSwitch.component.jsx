import React, {useState} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
const useStyles = makeStyles((theme) => ({
  label:{
    whiteSpace: 'nowrap',
    fontSize: '1rem',
  }
}));
const ColoredSwitch = (props)=>{
  const classes = useStyles();

  const {switchColor, label, checkedColor}=props;
  const [checked, setChecked]=useState(false);
   const CustomSwitch = withStyles({
        switchBase: {
          color: switchColor,
          '&$checked': {
            color: checkedColor? checkedColor : switchColor,
          },
          '&$checked + $track': {
            backgroundColor: checkedColor? checkedColor : switchColor,
          },
        },
        checked: {},
        track: {},
    })(Switch);

  const handleChange = () => {
    setChecked(!checked);
  };
  return(
    <FormGroup >
      <FormControlLabel
        control={
          <CustomSwitch checked={checked} onChange={handleChange} name='customSwitch' />
        }
        label={label}
        classes={{
          label: classes.label,
        }}
      />
    </FormGroup>
  )
};

export default ColoredSwitch;