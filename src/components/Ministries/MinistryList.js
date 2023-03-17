import MinistryItem from './MinistryItem';
import classes from './MinistryList.module.css';

function MinistryList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((ministry) => (
        <MinistryItem
          key={ministry.id}
          id={ministry.id}
          image={ministry.image}
          title={ministry.title}
          ministry={ministry.description}
        />
      ))}
    </ul>
  );
}

export default MinistryList;