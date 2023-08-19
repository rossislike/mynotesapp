import logo from './logo.svg';
import "@aws-amplify/ui-react/styles.css";
import { Card, View, Image, withAuthenticator, Heading, Button } from '@aws-amplify/ui-react';
import './App.css';

function App({ signOut }) {
  return (
    <View className="App">
      <Card>
        <Image src={logo} className="App-logo" alt="logo" />
        <Heading level={1}>Welcome to Your Amplify App with Authentication</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

export default withAuthenticator(App);
