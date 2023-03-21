import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectExcerciseIsEmpty } from '../../store/excercise/excercise.selector'
import Button, {
  BUTTON_TYPE_CLASSES
} from '../../components/button/button.component'
import { ButtonsContainer, HomeTitle } from './home.styles'

export const Home = () => {
  const isExcerciseEmpty = useSelector(selectExcerciseIsEmpty)

  return (
    <div>
      <HomeTitle>Realiza nuestros ejercicios</HomeTitle>
      <ButtonsContainer>
        <Link to='/results'>
          <Button
            isExcerciseEmpty={isExcerciseEmpty}
            buttonType={
              isExcerciseEmpty
                ? BUTTON_TYPE_CLASSES.disabled
                : BUTTON_TYPE_CLASSES.base
            }
          >
            Resultados
          </Button>
        </Link>
        <Link to='/excercise'>
          <Button
            isExcerciseEmpty={!isExcerciseEmpty}
            buttonType={
              isExcerciseEmpty
                ? BUTTON_TYPE_CLASSES.base
                : BUTTON_TYPE_CLASSES.disabled
            }
          >
            Ejercicios
          </Button>
        </Link>
      </ButtonsContainer>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <iframe
          src='https://www.africau.edu/images/default/sample.pdf'
          width='800px'
          height='600'
          title='pdf'
          style={{ border: 'none', margin: '20px' }}
        />
      </div>
    </div>
  )
}
