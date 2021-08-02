import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeShowName } from '../store/actions/profile'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'

const Profile = () => {
    const dispatch = useDispatch()
    const { name, age, showName } = useSelector((state) => state.profile)

    const [showNameSwitch, setShowNameSwitch] = React.useState(showName);

    const handleChangeShowName = (event) => {
        setShowNameSwitch(event.target.checked)
        dispatch(changeShowName(event.target.checked))
    }

    return (
        <div>
            <Card className="profile" variant="outlined">
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {showName ? name : null}
                    </Typography>
                    <Typography color="textSecondary">
                        {age}
                    </Typography>
                </CardContent>
                <CardActions>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={showNameSwitch}
                                onChange={handleChangeShowName}
                                name="showNameSwitch"
                                color="primary"
                            />
                        }
                        label="Show Name"
                    />
                </CardActions>
            </Card>
        </div>
    )
}

export default Profile