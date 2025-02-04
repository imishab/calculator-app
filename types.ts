import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
    SplashScreen: undefined;
    Calculator: undefined; 
};

export type NavigationProps = StackNavigationProp<RootStackParamList, 'SplashScreen'>;