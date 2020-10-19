import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '~/root-navigator';

type DetailsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Details'
>;

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

export interface DetailsProps {
  navigation: DetailsScreenNavigationProp;
  route: ProfileScreenRouteProp;
}
