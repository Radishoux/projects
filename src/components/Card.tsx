import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import RudyFace from 'media/rudyFace.png'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from '@mui/material';

export default function RudyCard(
  {cardTitle , editDate, cardImage, cardDescription, cardLink} :
  {cardTitle : string, editDate : string, cardImage : string, cardDescription : string, cardLink : string}) {

  return (
    <Card
    sx={(theme) => ({
      margin: 5,
      width: 300,
      gridColumn: 'span 2',
      flexDirection: 'row',
      flexWrap: 'wrap',
      overflow: 'hidden',
      gap: 'clamp(0px, (100% - 360px + 32px) * 999, 16px)',
      transition: 'transform 0.3s, border 0.3s',
      '&:hover': {
        transform: 'translateY(-4px)',
      },
      '& > *': { minWidth: 'clamp(0px, (360px - 100%) * 999,100%)' },
    })}
    >
      <CardHeader
        avatar={
          <Avatar alt="Remy Sharp" src={RudyFace}/>
        }
        title={cardTitle}
        subheader={editDate}
      />
      <Link href={cardLink}>
        <CardMedia
          component="img"
          height="150"
          image={cardImage}
          alt="Paella dish"
          />
      </Link>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {cardDescription}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}


