import  React,{useState} from 'react';
import COLORS from './utils/colors';
import {Button, View, Text,TextInput,TouchableOpacity, SafeAreaView,StyleSheet,Platform,ScrollView} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from "react-native-vector-icons/FontAwesome"

const AddProduct = ({navigation}) => {
 const[name,setName] = useState('shaun');
 const[category,setCategory] = useState('Tablets');
 const[quantity,setQuantity] = useState('30');
 const[purchasing,setPurchasing] = useState('30');
 const[selling,setSelling] = useState('30');
 const[batchNumber,setBatchNumber] = useState('30');
 const[manufactureName,setManufactureName] = useState('Onapha');
 const[drugDescription,setDrugDescription] = useState('umuti wo kunywa');
 const[age,setAge] = useState('30');
 const [manufactureDate, setManDate] = useState(new Date());
 const [suppliedDate, setSupDate] = useState(new Date());
 const [expireDate, setExpDate] = useState(new Date());
 const[manMode,setManMode] = useState('date');
 const[supMode,setSupMode] = useState('date');
 const[expMode,setExpMode] = useState('date');
 const[manShow,setManShow] = useState(false);
 const[supShow,setSupShow] = useState(false);
 const[expShow,setExpShow] = useState(false);
 const[textManDate,setTextManDate] = useState('empty');
 const[textSupDate,setTextSupDate] = useState('empty');
 const[textExpDate,setTextExpDate] = useState('empty');

 

 const onManufactureDateChange = (event,selectDate) => {
  const manufactureDate = selectDate || date;
  setManShow(Platform.OS === 'ios');
  setManDate(manufactureDate);

  let tempDate = new Date(manufactureDate);
  let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() +1) + '/' + tempDate.getFullYear();

  setTextManDate(fDate +'\n');
 


  console.log(fDate)
 }

 const onSuppliedDateChange = (event,selectDate) => {
  const suppliedDate = selectDate || date;
  setSupShow(Platform.OS === 'ios');
  setSupDate(suppliedDate);

  let tempDate = new Date(suppliedDate);
  let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() +1) + '/' + tempDate.getFullYear();
  
  setTextSupDate(fDate +'\n');
  


  console.log(fDate)
 }

 const onExpireDateChange = (event,selectDate) => {
  const expireDate = selectDate || date;
  setExpShow(Platform.OS === 'ios');
  setExpDate(expireDate);

  let tempDate = new Date(expireDate);
  let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() +1) + '/' + tempDate.getFullYear();
  setTextExpDate(fDate +'\n')

  console.log(fDate)
 }



 const showManMode = (currentMode) => {
  setManShow(true);
  setManMode(currentMode);

 }

 const showSupMode = (currentMode) => {
  setSupShow(true);
  setSupMode(currentMode);

 }

 const showExpMode = (currentMode) => {
  setExpShow(true);
  setExpMode(currentMode);

 }

  return (
    <SafeAreaView style={{backgroundColor: COLORS.white,flex: 1}}>

        <ScrollView
        contentContainerStyle={{paddingTop: 30, paddingHorizontal: 20}}>
        <Text style={{color: COLORS.black, fontSize: 30, fontWeight: 'bold'}}>
          Add New Drug Form
        </Text>
        <Text style={{color: COLORS.grey, fontSize: 18, marginVertical: 10}}>
          Enter Your Details for Your New Product.
        </Text>

        <View style={styles.container} >
          <Text style={styles.fieldName}>Drug Name</Text>
          <TextInput
           style={styles.input}
           placeholder='e.g. Quinine'
           onChangeText={(val) => setName(val)} />

          <Text style={styles.fieldName}>Category Name</Text>
          <TextInput
           style={styles.input}
           placeholder='Tablets'
           onChangeText={(val) => setCategory(val)} />

          <Text style={styles.fieldName}>Quantity</Text>
          <TextInput
           keyboardType='numeric'
           style={styles.input}
           placeholder='10'
           onChangeText={(val) => setQuantity(val)} />

          <Text style={styles.fieldName}>Purchasing Price</Text>
          <TextInput
           keyboardType='numeric'
           style={styles.input}
           placeholder='10500 fbu'
           onChangeText={(val) => setPurchasing(val)} />

          <Text style={styles.fieldName}>Selling Price</Text>
          <TextInput
           keyboardType='numeric'
           style={styles.input}
           placeholder='12000 fbu'
           onChangeText={(val) => setSelling(val)} />

          <Text style={styles.fieldName}>Batch Number</Text>
          <TextInput
           keyboardType='numeric'
           style={styles.input}
           placeholder='4684864'
           onChangeText={(val) => setBatchNumber(val)} />

         <Text style={styles.fieldName}>Manufature Name</Text>
          <TextInput
           style={styles.input}
           placeholder='Onapha'
           onChangeText={(val) => setManufactureName(val)} />

        <Text style={styles.fieldName}>Manufacture Date</Text>
        <View style={{margin:20}}>
        <Button
        title={textManDate}
        onPress={() => showManMode('date')}>
        </Button>
        </View>

        <Text style={styles.fieldName}>Supplied Date</Text>
        <View style={{margin:20}}>
        <Button
        title={textSupDate}
        onPress={() => showSupMode('date')}>
        </Button>
        </View>

        <Text style={styles.fieldName}>Expire Date</Text>
        <View style={{margin:20}}>
        <Button
        title={textExpDate}
        onPress={() => showExpMode('date')}
        >
        </Button>
        </View>
        <View>
        <Text style={styles.fieldName}>Drug Description</Text>
          <TextInput
           multiline
           style={styles.input}
           placeholder='Describe your medecine'
           onChangeText={(val) => setDrugDescription(val)} />

           </View>

           <View>
           
       
          <TouchableOpacity
          style={styles.circle}
          onPress= {() => {
               }} >
        
           <Icon name="check" size={25} color="#fff" />
          
    
         </TouchableOpacity>
          </View>


          <Text>        </Text>

{manShow && (
         <DateTimePicker
         testID='dateTimePicker'
         value={manufactureDate}
         mode ={manMode}
         is24Hour={true}
         display='default'
         onChange={onManufactureDateChange}/>
         
        )}

{supShow && (
         <DateTimePicker
         testID='dateTimePicker'
         value={suppliedDate}
         mode ={supMode}
         is24Hour={true}
         display='default'
         onChange={onSuppliedDateChange}/>
         
        )}

{expShow && (
         <DateTimePicker
         testID='dateTimePicker'
         value={expireDate}
         mode ={expMode}
         is24Hour={true}
         display='default'
         onChange={onExpireDateChange}/>
         
        )}


       
        </View>

        
        </ScrollView>
      
    </SafeAreaView>
  );
};

export default AddProduct;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
   
    
    
  
 },
 
 fieldName:{
  fontSize:20,
  
 },
 

 input: {
 
  padding:15,
  margin:10,
  width:350,
  backgroundColor:'grey',
  
},
datePickerStyle: {
  fontWeight:'bold',
  fontSize:20,
  color:'red',
 },
 circle: {
  
  backgroundColor: '#f52d56',
  width: 60,
  height: 60,
  top:20,
  position: 'relative',
  left:300,
  borderRadius: 50,
  justifyContent:'center',
  alignItems:'center',
  cursor:'pointer',
}

})

