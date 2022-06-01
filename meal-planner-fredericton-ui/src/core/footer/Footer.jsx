import React, {useEffect, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import {MenuList} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles (() => ({
  footerContainer: {
    backgroundColor: '#22242b',
  },
  footerInnerContainer: {
    maxWidth: 1176,
    width: '100%',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: 0,
    color: 'white',
    '& a' : {
      color: 'white',
      fontSize: 14,
      fontFamily: 'Open Sans',
      padding: 0,
      lineHeight: 1.5
    },
    '& h2': {
      fontSize: 18,
      fontWeight: 700,
      fontFamily: 'Open Sans',
    },
    footerText: {
      fontStyle: 'italic',
      marginBottom: 40,
      color: 'white'
    }
  },
}));
const Footer = (props) => {
  const { t } = useTranslation([
    'common'
  ]);

  const styles = useStyles(props);
  const [State, setState] = useState({data:[], components:[]});
  const footers = [
    {
	    footer: [ { description: t('common:lblPoweredBy'), link: 'https://www.civictechfredericton.com/' } ]
    },
//    {  
//	    footer: [ { description: t('common:lblContactUs'), link: '#' }, { description: t('common:lblPrivacyPolicy'), link: '#' } ]
//    },
    {
	    footer: [ { description: t('common:lblGreenerVillage'), link: 'https://www.greenervillage.ca/' } ]
    }
  ];
  


  return (
    <Grid className={styles.footerContainer}>
      <Grid item className={styles.footerInnerContainer}
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start">
        {footers.map((footer, i) => (
            <ul key={i}>
              {footer.footer.map((item) => (
                <li key={item}>
                  <Link to={{ pathname: item.link }} target="_blank" variant="subtitle1" color="textSecondary">
                    {item.description}
                  </Link>
                </li>
              ))}
            </ul>
        ))}
      </Grid>
    </Grid>
  );
};
export default Footer;
