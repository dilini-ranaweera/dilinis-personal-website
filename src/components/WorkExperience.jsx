import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles =  makeStyles({
	image: {
	  maxWidth: 'max-content',
	  maxHeight: 'max-content', // Customize the height as per your requirement
	  objectFit: 'cover', // Adjust the image cropping behavior if necessarry
	  position: 'relative',
	  display: 'block',
	  marginLeft: 'auto',
	  marginRight: 'auto',
	  marginBottom: '4.25em',
	  
	}
  });


const WorkExperience = (props) => {
	const classes = useStyles();
	return (
		<div className="AHHH">
			<section className="box">
				<a href="#" className="image-featured"><img className={classes.image} src={props.imagePath} alt="" /></a>
						<header>
							<h3>{props.title}</h3>
						</header>
						<p>{props.jobDescription}</p>
				<footer>
					<ul className="actions">
						<li><a href={props.websiteLink} target="_blank" rel="noopener noreferrer"className="button alt">Click here to see the associated website!</a></li>
					</ul>
				</footer>
			</section>
		</div>
	)

};

export default WorkExperience;