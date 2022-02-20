import { CircularProgress, CircularProgressProps } from '@material-ui/core'
import styles from './styles.module.css'

export interface ICircularProgressProps extends CircularProgressProps {
  marginLeftAuto?: boolean
}

const MyCircularProgress = ({ marginLeftAuto = false, ...props }) => {
  return (
    <div
      className={`${styles.center} ${marginLeftAuto && styles.marginLeftAuto}`}
    >
      <CircularProgress color="inherit" {...props} />
    </div>
  )
}

export default MyCircularProgress
