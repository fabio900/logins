
import {Navigation} from 'react-native-navigation';
Navigation.registerComponent('AuthScreen',() => AuthScreen);
Navigation.registerComponent('SignIn',() => SignIn);
Navigation.registerComponent('SignUp',() => SignUp);




import AuthScreen from './src/components/screens/AuthScreen';
import SignIn from './src/components/screens/SignIn';
import SignUp from './src/components/screens/SignUp';




// registerScreens();


Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        stack :{
            id : 'Authstack ',
            children : [ 
                { 
                component :{
                    name : 'AuthScreen',
                    options:{
                      topBar:{
                        title:
                        {
                          text: 'authscreen'
                        }
                      }

                    }


                },
                },
                
                ]


        }
      },
    });
  });
