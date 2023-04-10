import React,{ useState, useLayoutEffect , useCallback, useEffect, BackHandler } from 'react'

import addEventListener from 'react/'
import { View,StyleSheet,Text } from 'react-native'
import { GiftedChat, Avatar } from 'react-native-gifted-chat';
import { collection,addDoc, orderBy, query, onSnapshot } from 'firebase/firestore';
import { database } from '../../config/firebase';

function Chat () {
const [order_id , setOrder_id] = useState('833810');
const [user_id , setUserId] = useState('1');
const [name , setName] = useState('revan');
const [email , setEmail] = useState('revan2@gmail.com');

const [messages, setMessages] = useState([]);
const [newMessage, setNewMessage] = useState('');

useLayoutEffect(() => {
    const collectionRef = collection(database,`kilapin-${order_id}`);
    const q = query(collectionRef, orderBy('createdAt', 'desc'));

    console.log(collectionRef)

const unsubscribe = onSnapshot(q, querySnapshot => {
    console.log('querySnapshot unsusbscribe');
      setMessages(
        querySnapshot.docs.map(doc => ({
          order_id: doc.data().order_id,
          _id: doc.data()._id,
          createdAt: doc.data().createdAt.toDate(),
          user: doc.data().user,
          text: doc.data().text
        }))
      );
    });
return unsubscribe;
  }, []);

  const [userAvatar, setUserAvatar] = useState(null);

  useEffect(() => {
    // fetch the user's profile photo from the server
    // and set the userAvatar state variable
    setUserAvatar('https://i.pravatar.cc/300');
  }, []);

//   useEffect(() => {
//     const backAction = () => {
//       // handle the back button press here
//       // e.g. navigate back to the previous screen
//       navigation.goBack();
//       return true;
//     };
  
//     const backHandler = BackHandler.(
//       "hardwareBackPress",
//       backAction
//     );
  
//     return () => backHandler.remove();
//   }, []);

// we push the messege to the DB with order_id
const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages)
    );
    // setMessages([...messages, ...messages]);
    const { _id, createdAt, text, user } = messages[0];    
    addDoc(collection(database, `kilapin-${order_id}`), {
      order_id,
      _id,
      createdAt,
      user,
      text
    });
  }, []);

  return (
    <GiftedChat
    messages={messages}
    showAvatarForEveryMessage={false}
    showUserAvatar={false}
    onSend={messages => onSend(messages)}
    messagesContainerStyle={{
        backgroundColor: '#fff'
    }}
    textInputStyle={{
        backgroundColor: '#fff',
        borderRadius: 20,
    }}
    renderAvatar={(props) => {
        return <Avatar {...props} source={userAvatar} />;
    }}
    user ={{
        _id: user_id,
        order_id: order_id,
        email: email,
        name: name,
    }}/>
)

//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//     },
//     header: {
//       paddingHorizontal: 16,
//       paddingVertical: 12,
//       backgroundColor: '#fff',
//     },
    
//   });
}

export default Chat
