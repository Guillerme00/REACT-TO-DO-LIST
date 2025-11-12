import * as S from './styles'

export type Props = {
  Active?: boolean
  Conter: number
  Text?: string
}

const FilterCard = ({ Active, Conter, Text }: Props) => {
  return (
    <S.Card Active={Active}>
      <S.Contador>{Conter}</S.Contador>
      <S.Label>{Text}</S.Label>
    </S.Card>
  )
}

export default FilterCard
