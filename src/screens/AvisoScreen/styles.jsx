import styled from 'styled-components/native';
import { ScrollView } from 'react-native';

export const Container = styled(ScrollView)`
    background-color: #edf2f4;
    flex: 1;
`

export const MainContainer = styled.View`
    justify-content: flex-start;
    width: 90%;
    margin-top: 28px;
    margin-bottom: 28px;
`

export const SearchContainer = styled.View`
    background-color: #2d2b42;
    flex-direction: row;
    align-items: center;
    border-radius: 4px;
`
export const SearchButtonIcon = styled.TouchableOpacity`
    padding-left: 12px;
`

export const SearchInput = styled.TextInput`
    padding: 0.5rem;
    font-family: 'Poppins_400Regular';
    color: #fff;
    width: 100%;
    font-size: 1rem;
`

export const SpaceBetween = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 36px;
`

export const SwitchContainer = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 0.25rem;
    justify-content: space-between;
    align-items: center;
`

export const Switch = styled.Switch`
    transform: scaleX(1.3);
    transform: scaleY(1.3);
`

export const SwitchText = styled.Text`
    color: #2b2d42;
    font-family: 'Poppins_400Regular';
    font-size: 14px;
`
export const SmallButton = styled.TouchableOpacity`
    background-color: ${props => props.bgColor || '#2b2d42'};
    align-items: center;
    justify-content: center;
    border-radius: 24px;
    padding-inline: 1rem;
    padding-block: 8px;
    flex-direction: row;
    gap: 8px;
`

export const SmallButtonText = styled.Text`
    color: ${props => props.color || '#2b2d42'};
    font-size: 1rem;
    font-family: 'Poppins_400Regular';
    justify-content: center;
    align-items: center;
    gap: 4px;
`

export const NotificationContainer = styled.View`
    margin-top: 4rem;
    gap:20px;
`

export const Notification = styled.View`
    background-color: #fff;
    border-radius: 8px;
    padding: 1rem;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    gap: 8px;
`

export const NotificationDescription = styled.Text`
    color: #2b2d42;
    font-size: 15px;
    font-family: 'Poppins_400Regular';
    text-align: justify;
`

export const NotificationButton = styled(SmallButton)`
    align-self: flex-end;
    width: 100px;
`

export const NotificationButtonText = styled(SmallButtonText)`
    color: #fff;
    font-size: 15px;
    font-family: 'Poppins_400Regular';
    flex-wrap: wrap;
`