import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function InfoBox({ info }) {
    const INIT_URL = "https://plus.unsplash.com/premium_photo-1661897016268-b77ad5186d02?q=80&w=1055&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return (
        <center>
            <div>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 160 }}
                        image={INIT_URL}
                        title="scattered clouds"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Temperature = {info.temp}&deg;C<br></br><br></br>
                            Humidity = {info.humidity}<br></br><br></br>
                            Min Temp = {info.tempMin}&deg;C<br></br><br></br>
                            Max Temp = {info.tempMax}&deg;C<br></br><br></br>
                            The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </center>

    )
}