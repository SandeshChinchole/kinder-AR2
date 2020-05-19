import * as React from 'react';
import { Button, View, Text, Image, StyleSheet, TouchableOpacity, Alert, Linking, ScrollView, ImageBackground, TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SplashScreen, Constants, WebBrowser } from 'expo';
import welcome from './assets/welcome.gif';

import a from './assets/alphabet/A.gif';
import b from './assets/alphabet/B.gif';
import c from './assets/alphabet/C.gif';
import d from './assets/alphabet/D.gif';
import e from './assets/alphabet/E.gif';
import f from './assets/alphabet/F.gif';
import g from './assets/alphabet/G.gif';
import h from './assets/alphabet/H.gif';

import fruits from './assets/categories/fruits.gif';
import flowers from './assets/categories/flowers.gif';
import animals from './assets/categories/animals.gif';
import colors from './assets/categories/color.gif';
import numbers from './assets/categories/numbers.gif';
import shapes from './assets/categories/shapes.gif';

import solar from './assets/planets/solar.gif';
import mercury from './assets/planets/mercury.gif';
import venus from './assets/planets/venus.gif';
import earth from './assets/planets/Earth.gif';
import mars from './assets/planets/mars.gif';
import jupiter from './assets/planets/jupiter.gif';
import saturn from './assets/planets/saturn.gif';
import uranus from './assets/planets/uranus.gif';
import neptune from './assets/planets/neptune.gif';
import ivenus from './assets/planets/ivenus.gif';
import imars from './assets/planets/imars.gif';
import ijupitar from './assets/planets/ijupitar.gif';

import apple from './assets/fruits/apple.gif';
import banana from './assets/fruits/banana.gif';
import mango from './assets/fruits/mango.gif';
import grapes from './assets/fruits/grapes.gif';
import watermelon from './assets/fruits/watermelon.gif';
import pineapple from './assets/fruits/pineapple.gif';

import square from './assets/shapes/square.png';
import circle from './assets/shapes/circle.jpg';
import rectangle from './assets/shapes/rectangle.png';
import triangle from './assets/shapes/triangle.png';
import pentagon from './assets/shapes/pentagon.png';
import hexagon from './assets/shapes/hexagon.jpg';

import lion from './assets/animals/lion.gif';
import tiger from './assets/animals/tiger.gif';
import bear from './assets/animals/bear.gif';
import wolf from './assets/animals/wolf.gif';
import snake from './assets/animals/snake.gif';
import elephant from './assets/animals/elephant.gif';

import n1 from './assets/numbers/1.gif';
import n2 from './assets/numbers/2.gif';
import n3 from './assets/numbers/3.gif';
import n4 from './assets/numbers/4.gif';
import n5 from './assets/numbers/5.gif';
import n6 from './assets/numbers/6.gif';

import rose from './assets/flowers/rose.gif';
import sunflower from './assets/flowers/sunflower.gif';
import lotus from './assets/flowers/lotus.gif';
import daisy from './assets/flowers/daisy.gif';
import daffodil from './assets/flowers/daffodil.gif';
import lily from './assets/flowers/lily.gif';

import red from './assets/colors/red.png';
import green from './assets/colors/green.png';
import blue from './assets/colors/blue.png';
import yellow from './assets/colors/yellow.png';
import black from './assets/colors/black.jpeg';
import pink from './assets/colors/pink.jpeg';

import correct from './assets/quiz/correct.gif';
import incorrect from './assets/quiz/incorrect.gif';



SplashScreen.preventAutoHide();
setTimeout(SplashScreen.hide, 6000);


//Welcome Screen


function WelcomeScreen({ navigation }) {  
  return (
    <View>

    		<ImageBackground
    			source={welcome}
    			style={{height: 850, width: 375}}
    		>

    			<View style={styles.appName}>
    				<Text style={{fontSize: 80, fontWeight: "200"}}>
    					Kinder
    				</Text>
    				<Text>{"    "}</Text>
    				<Text style={{fontSize: 80, fontWeight: "bold"}}>
    					AR
    				</Text>
    			</View>

    			<View style={styles.loginBar}>

		    		<TouchableHighlight 
					   	style={styles.button}
					    onPress={() => navigation.navigate('Categories')}
					>
							<Text style={{color: "white"}}>Login</Text>
					</TouchableHighlight> 

					<TouchableHighlight
					    style={styles.button}
					    onPress={() => navigation.navigate('Categories')}
					>
							<Text style={{color: "white"}}>Sign Up</Text>
					</TouchableHighlight> 

    			</View>

    		</ImageBackground>

    </View>
  );
}


///Categories Screen

function CategoriesScreen({ navigation }) {  
  return (
    <View style={styles.categories}>

    <View style={styles.container1}>
      <TouchableOpacity 
    		onPress={() => navigation.navigate('Alphabet')}
       >
			<Image source={a} 
				style={styles.smallButtons}
			/>
      </TouchableOpacity> 

      <Text style={styles.text}>Alphabet</Text>

      <TouchableOpacity 
    		onPress={() => navigation.navigate('Planets')}
       >
			<Image source={venus} 
				style={styles.smallButtons}
			/>
      </TouchableOpacity> 

      <Text style={styles.text}>Planets</Text>

      <TouchableOpacity 
    		onPress={() => navigation.navigate('Animals')}
       >
			<Image source={animals} 
				style={styles.smallButtons}
			/>
      </TouchableOpacity> 

      <Text style={styles.text}>Animals</Text>

      <TouchableOpacity 
    		onPress={() => navigation.navigate('Flowers')}
       >
			<Image source={flowers} 
				style={styles.smallButtons}
			/>
      </TouchableOpacity> 

       <Text style={styles.text}>Flowers</Text>

    </View>

    <View style={styles.container2}>

      <TouchableOpacity 
    		onPress={() => navigation.navigate('Fruits')}
       >
			<Image source={fruits} 
				style={styles.smallButtons}
			/>
      </TouchableOpacity> 

      <Text style={styles.text}>Fruits</Text>

      <TouchableOpacity 
    		onPress={() => navigation.navigate('Shapes')}
       >
			<Image source={shapes} 
				style={styles.smallButtons}
			/>
      </TouchableOpacity> 

      <Text style={styles.text}>Shapes</Text>

      <TouchableOpacity 
    		onPress={() => navigation.navigate('Numbers')}
       >
			<Image source={numbers} 
				style={styles.smallButtons}
			/>
      </TouchableOpacity> 

      <Text style={styles.text}>Numbers</Text>

      <TouchableOpacity 
    		onPress={() => navigation.navigate('Colors')}
       >
			<Image source={colors} 
				style={styles.smallButtons}
			/>
      </TouchableOpacity> 

      <Text style={styles.text}>Colors</Text>

    </View>

    </View>
  );
}


//Info Screen


function InfoScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: '#cea2f5' }}>
    	<ScrollView>

		<View style={styles.categories}>

				<View style={styles.container1}>

					<TouchableOpacity 
			    		onPress={() => navigation.navigate('Incorrect')}
			        >
						<Text style={styles.infoButton}> Augmented Reality </Text>
	 		        </TouchableOpacity>

					<TouchableOpacity 
			    		onPress={() => navigation.navigate('Incorrect')}
			        >
						<Text style={styles.infoButton}> Settings </Text>
	 		        </TouchableOpacity>

	 		    </View>

	 		    <View style={styles.container2}>

					<TouchableOpacity 
			    		onPress={() => navigation.navigate('Incorrect')}
			        >
						<Text style={styles.infoButton}> Navigation </Text>
	 		        </TouchableOpacity>

					<TouchableOpacity 
			    		onPress={() => navigation.navigate('Incorrect')}
			        >
						<Text style={styles.infoButton}> About </Text>
	 		        </TouchableOpacity>

	 		    </View>

		</View>

		</ScrollView>
    </View>
  );
}


///Aplhabet Screen


function AlphabetScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: '#cea2f5' }}>
    	<ScrollView>
    	<View style={styles.horizontalContainer}>
    		<ScrollView horizontal={true}>

		      <TouchableOpacity 
		    		onPress={this.A}
		       >
					<Image source={a} 
						style={styles.bigButtons}
					/>
		      </TouchableOpacity>

		      <TouchableOpacity 
		    		onPress={this.B}
		       >
					<Image source={b} 
						style={styles.bigButtons}
					/>
		      </TouchableOpacity>

		      <TouchableOpacity 
		    		onPress={this.A}
		       >
					<Image source={c} 
						style={styles.bigButtons}
					/>
		      </TouchableOpacity>

		      <TouchableOpacity 
		    		onPress={this.A}
		       >
					<Image source={d} 
						style={styles.bigButtons}
					/>
		      </TouchableOpacity>

		      <TouchableOpacity 
		    		onPress={this.A}
		       >
					<Image source={e} 
						style={styles.bigButtons}
					/>
		      </TouchableOpacity>

		    </ScrollView>
		</View>

		<View style={styles.browse}>
			<Text style={{ fontSize:20, color: 'black'}}> Browse More Below </Text>
		</View>

		<View style={styles.categories}>

				<View style={styles.container1}>

					<TouchableOpacity 
			    		onPress={this.A}
			        >
						<Image source={a} 
						style={styles.smallButtons2}
						/>
	 		        </TouchableOpacity>

	 		        <TouchableOpacity 
			    		onPress={this.A}
			        >
						<Image source={c} 
						style={styles.smallButtons2}
						/>
	 		        </TouchableOpacity> 

	 		        <TouchableOpacity 
			    		onPress={this.A}
			        >
						<Image source={e} 
						style={styles.smallButtons2}
						/>
	 		        </TouchableOpacity> 

	 		        <TouchableOpacity 
			    		onPress={this.A}
			        >
						<Image source={g} 
						style={styles.smallButtons2}
						/>
	 		        </TouchableOpacity> 

	 		    </View>

	 		    <View style={styles.container2}>

					<TouchableOpacity 
			    		onPress={this.B}
			        >
						<Image source={b} 
						style={styles.smallButtons2}
						/>
	 		        </TouchableOpacity>

	 		        <TouchableOpacity 
			    		onPress={this.A}
			        >
						<Image source={d} 
						style={styles.smallButtons2}
						/>
	 		        </TouchableOpacity> 

	 		        <TouchableOpacity 
			    		onPress={this.A}
			        >
						<Image source={f} 
						style={styles.smallButtons2}
						/>
	 		        </TouchableOpacity> 

	 		        <TouchableOpacity 
			    		onPress={this.A}
			        >
						<Image source={h} 
						style={styles.smallButtons2}
						/>
	 		        </TouchableOpacity> 

	 		    </View>

		</View>

    			<View style={styles.navBar}>

		    		<TouchableHighlight 
					   	style={styles.navButton}
					    onPress={() => navigation.navigate('Categories')}
					>
							<Text style={{ fontSize:20, color: "white"}}>Home</Text>
					</TouchableHighlight> 

					<TouchableHighlight
					    style={styles.navButton}
					    onPress={() => navigation.navigate('Quiz')}
					>
							<Text style={{ fontSize:20, color: "white"}}>Quiz</Text>
					</TouchableHighlight> 

    			</View>

		</ScrollView>
    </View>
  );
}

  A = () => {
    Linking.openURL('https://webpage.pace.edu/sc31285n/KinderAR/alpha.html');
  }

  B = () => {
    Linking.openURL('https://webpage.pace.edu/sc31285n/KinderAR/beta.html');
  }


//Quiz Screen


function QuizScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: '#cea2f5' }}>
    	<ScrollView>

		<View style={styles.browse}>
			<Text style={{ fontSize:25, color: 'black', marginTop: 40, marginBottom: 40}}> A stands for </Text>
		</View>

		<View style={styles.categories}>

				<View style={styles.container1}>

					<TouchableOpacity 
			    		onPress={() => navigation.navigate('Incorrect')}
			        >
						<Image source={tiger} 
						style={styles.smallButtons2}
						/>
	 		        </TouchableOpacity>

	 		        <TouchableOpacity 
			    		onPress={() => navigation.navigate('Correct')}
			        >
						<Image source={apple} 
						style={styles.smallButtons2}
						/>
	 		        </TouchableOpacity> 

	 		    </View>

	 		    <View style={styles.container2}>

					<TouchableOpacity 
			    		onPress={() => navigation.navigate('Incorrect')}
			        >
						<Image source={sunflower} 
						style={styles.smallButtons2}
						/>
	 		        </TouchableOpacity>

	 		        <TouchableOpacity 
			    		onPress={() => navigation.navigate('Incorrect')}
			        >
						<Image source={red} 
						style={styles.smallButtons2}
						/>
	 		        </TouchableOpacity> 

	 		    </View>

		</View>

		</ScrollView>
    </View>
  );
}


///Correct Screen


function CorrectScreen({ navigation }) {  
  return (
    <View>

		<TouchableHighlight 
					    onPress={() => navigation.navigate('Alphabet')}
		>
    		<ImageBackground
    			source={correct}
    			style={{height: 850, width: 375}}
    		>

    			<View style={{marginTop: 40, alignItems: 'center'}}>
    				<Text style={{fontSize: 80, fontWeight: "200"}}>
    					Correct
    				</Text>
    			</View>

    		</ImageBackground>
    	</TouchableHighlight>

    </View>
  );
}


///Incorrect Screen


function IncorrectScreen({ navigation }) {  
  return (
    <View>

		<TouchableHighlight 
					    onPress={() => navigation.navigate('Quiz')}
		>
    		<ImageBackground
    			source={incorrect}
    			style={{height: 850, width: 375}}
    		>

    			<View style={{marginTop: 40, alignItems: 'center'}}>
    				<Text style={{fontSize: 80, fontWeight: "200"}}>
    					Incorrect
    				</Text>
    			</View>

    		</ImageBackground>
    	</TouchableHighlight>

    </View>
  );
}


///Planets Screen


function PlanetsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: '#cea2f5'}}>
    	<ScrollView>
    	<View style={styles.horizontalContainer}>
    		<ScrollView horizontal={true}>

		      <TouchableOpacity 
		    		onPress={this.Solar}
		       >
					<Image source={solar} 
						style={styles.bigButtons}
					/>
					<View style={styles.names1}>
						<Text style={styles.text}>Solar System</Text>
					</View>
		      </TouchableOpacity>

		      <TouchableOpacity 
		    		onPress={this.A}
		       >
					<Image source={ivenus} 
						style={styles.bigButtons}
					/>
					<View style={styles.names1}>
						<Text style={styles.text}>Venus</Text>
					</View>
		      </TouchableOpacity>

		      <TouchableOpacity 
		    		onPress={this.A}
		       >
					<Image source={imars} 
						style={styles.bigButtons}
					/>
					<View style={styles.names1}>
						<Text style={styles.text}>Mars</Text>
					</View>
		      </TouchableOpacity>

		      <TouchableOpacity 
		    		onPress={this.Earth}
		       >
					<Image source={ijupitar} 
						style={styles.bigButtons}
					/>
					<View style={styles.names1}>
						<Text style={styles.text}>Jupiter</Text>
					</View>
		      </TouchableOpacity>



		    </ScrollView>
		</View>

		<View style={styles.browse}>
			<Text style={{ fontSize:20, color: 'black'}}> Browse More Below </Text>
		</View>

		<View style={styles.categories}>

				<View style={styles.container1}>

					<TouchableOpacity 
			    		onPress={this.A}
			        >
						<Image source={mercury} 
						style={styles.smallButtons2}
						/>
					<View style={styles.names2}>
						<Text style={styles.text}>Mercury</Text>
					</View>
	 		        </TouchableOpacity> 

	 		        <TouchableOpacity 
			    		onPress={this.Earth}
			        >
						<Image source={earth} 
						style={styles.smallButtons2}
						/>
					<View style={styles.names2}>
						<Text style={styles.text}>Earth</Text>
					</View>
	 		        </TouchableOpacity> 

					<TouchableOpacity 
			    		onPress={this.A}
			        >
						<Image source={jupiter} 
						style={styles.smallButtons2}
						/>
					<View style={styles.names2}>
						<Text style={styles.text}>Jupiter</Text>
					</View>
	 		        </TouchableOpacity>

	 		        <TouchableOpacity 
			    		onPress={this.A}
			        >
						<Image source={uranus} 
						style={styles.smallButtons2}
						/>
					<View style={styles.names2}>
						<Text style={styles.text}>Uranus</Text>
					</View>
	 		        </TouchableOpacity> 

	 		    </View>

	 		    <View style={styles.container2}>

	 		        <TouchableOpacity 
			    		onPress={this.A}
			        >
						<Image source={venus} 
						style={styles.smallButtons2}
						/>
					<View style={styles.names2}>
						<Text style={styles.text}>Venus</Text>
					</View>
	 		        </TouchableOpacity>

	 		        <TouchableOpacity 
			    		onPress={this.A}
			        >
						<Image source={mars} 
						style={styles.smallButtons2}
						/>
					<View style={styles.names2}>
						<Text style={styles.text}>Mars</Text>
					</View>
	 		        </TouchableOpacity>

	 		        <TouchableOpacity 
			    		onPress={this.A}
			        >
						<Image source={saturn} 
						style={styles.smallButtons2}
						/>
					<View style={styles.names2}>
						<Text style={styles.text}>Saturn</Text>
					</View>
	 		        </TouchableOpacity> 

	 		        <TouchableOpacity 
			    		onPress={this.A}
			        >
						<Image source={neptune} 
						style={styles.smallButtons2}
						/>
					<View style={styles.names2}>
						<Text style={styles.text}>Neptune</Text>
					</View>
	 		        </TouchableOpacity> 

	 		    </View>

		</View>

   			<View style={styles.navBar}>

		    		<TouchableHighlight 
					   	style={styles.navButton}
					    onPress={() => navigation.navigate('Categories')}
					>
							<Text style={{ fontSize:20, color: "white"}}>Home</Text>
					</TouchableHighlight> 

					<TouchableHighlight
					    style={styles.navButton}
					    onPress={() => navigation.navigate('Quiz')}
					>
							<Text style={{ fontSize:20, color: "white"}}>Quiz</Text>
					</TouchableHighlight> 

    			</View>

		</ScrollView>
    </View>

  );
}


  Solar = () => {
    Linking.openURL('https://webpage.pace.edu/sc31285n/KinderAR/solar.html');
  }

  Earth = () => {
    Linking.openURL('https://webpage.pace.edu/sc31285n/KinderAR/earth.html');
  }


///Fruits Screen


function FruitsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: '#cea2f5'}}>
    	<ScrollView>

		<View style={styles.categories}>

				<View style={styles.container1}>

					<TouchableOpacity 
			    		onPress={this.A}
			        >
						<Image source={apple} 
						style={styles.smallButtons2}
						/>
					<View style={styles.names2}>
						<Text style={styles.text}>Apple</Text>
					</View>
	 		        </TouchableOpacity> 

	 		        <TouchableOpacity 
			    		onPress={this.Earth}
			        >
						<Image source={banana} 
						style={styles.smallButtons2}
						/>
					<View style={styles.names2}>
						<Text style={styles.text}>Banana</Text>
					</View>
	 		        </TouchableOpacity> 

					<TouchableOpacity 
			    		onPress={this.A}
			        >
						<Image source={watermelon} 
						style={styles.smallButtons2}
						/>
					<View style={styles.names2}>
						<Text style={styles.text}>Water Melon</Text>
					</View>
	 		        </TouchableOpacity>

	 		    </View>

	 		    <View style={styles.container2}>

	 		        <TouchableOpacity 
			    		onPress={this.A}
			        >
						<Image source={mango} 
						style={styles.smallButtons2}
						/>
					<View style={styles.names2}>
						<Text style={styles.text}>Mango</Text>
					</View>
	 		        </TouchableOpacity>

	 		        <TouchableOpacity 
			    		onPress={this.A}
			        >
						<Image source={grapes} 
						style={styles.smallButtons2}
						/>
					<View style={styles.names2}>
						<Text style={styles.text}>Grapes</Text>
					</View>
	 		        </TouchableOpacity>

	 		        <TouchableOpacity 
			    		onPress={this.A}
			        >
						<Image source={pineapple} 
						style={styles.smallButtons2}
						/>
					<View style={styles.names2}>
						<Text style={styles.text}>Pineapple</Text>
					</View>
	 		        </TouchableOpacity> 

	 		    </View>

		</View>

   			<View style={styles.navBar}>

		    		<TouchableHighlight 
					   	style={styles.navButton}
					    onPress={() => navigation.navigate('Categories')}
					>
							<Text style={{ fontSize:20, color: "white"}}>Home</Text>
					</TouchableHighlight> 

					<TouchableHighlight
					    style={styles.navButton}
					    onPress={() => navigation.navigate('Quiz')}
					>
							<Text style={{ fontSize:20, color: "white"}}>Quiz</Text>
					</TouchableHighlight> 

    			</View>

		</ScrollView>
    </View>
  );
}


  Solar = () => {
    Linking.openURL('https://webpage.pace.edu/sc31285n/KinderAR/solar.html');
  }

  Earth = () => {
    Linking.openURL('https://webpage.pace.edu/sc31285n/KinderAR/earth.html');
  }


///Shapes Screen


function ShapesScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: '#cea2f5'}}>
    	<ScrollView>

		<View style={styles.categories}>

				<View style={styles.container1}>

					<TouchableOpacity 
			    		onPress={this.A}
			        >
						<Image source={square} 
						style={styles.smallButtons2}
						/>
					<View style={styles.names2}>
						<Text style={styles.text}>Square</Text>
					</View>
	 		        </TouchableOpacity> 

	 		        <TouchableOpacity 
			    		onPress={this.Earth}
			        >
						<Image source={triangle} 
						style={styles.smallButtons2}
						/>
					<View style={styles.names2}>
						<Text style={styles.text}>Triangle</Text>
					</View>
	 		        </TouchableOpacity> 

					<TouchableOpacity 
			    		onPress={this.A}
			        >
						<Image source={pentagon} 
						style={styles.smallButtons2}
						/>
					<View style={styles.names2}>
						<Text style={styles.text}>Pentagon</Text>
					</View>
	 		        </TouchableOpacity>
	 		        
	 		    </View>

	 		    <View style={styles.container2}>

	 		        <TouchableOpacity 
			    		onPress={this.A}
			        >
						<Image source={circle} 
						style={styles.smallButtons2}
						/>
					<View style={styles.names2}>
						<Text style={styles.text}>Circle</Text>
					</View>
	 		        </TouchableOpacity>

	 		        <TouchableOpacity 
			    		onPress={this.A}
			        >
						<Image source={rectangle} 
						style={styles.smallButtons2}
						/>
					<View style={styles.names2}>
						<Text style={styles.text}>Rectangle</Text>
					</View>
	 		        </TouchableOpacity>

	 		        <TouchableOpacity 
			    		onPress={this.A}
			        >
						<Image source={hexagon} 
						style={styles.smallButtons2}
						/>
					<View style={styles.names2}>
						<Text style={styles.text}>Hexagon</Text>
					</View>
	 		        </TouchableOpacity> 

	 		    </View>

		</View>

   			<View style={styles.navBar}>

		    		<TouchableHighlight 
					   	style={styles.navButton}
					    onPress={() => navigation.navigate('Categories')}
					>
							<Text style={{ fontSize:20, color: "white"}}>Home</Text>
					</TouchableHighlight> 

					<TouchableHighlight
					    style={styles.navButton}
					    onPress={() => navigation.navigate('Quiz')}
					>
							<Text style={{ fontSize:20, color: "white"}}>Quiz</Text>
					</TouchableHighlight> 

    			</View>

		</ScrollView>
    </View>
  );
}


  Solar = () => {
    Linking.openURL('https://webpage.pace.edu/sc31285n/KinderAR/solar.html');
  }

  Earth = () => {
    Linking.openURL('https://webpage.pace.edu/sc31285n/KinderAR/earth.html');
  }

///Animals Screen


function AnimalsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: '#cea2f5'}}>
    	<ScrollView>

		<View style={styles.categories}>

				<View style={styles.container1}>

					<TouchableOpacity 
			    		onPress={this.A}
			        >
						<Image source={lion} 
						style={styles.smallButtons2}
						/>
					<View style={styles.names2}>
						<Text style={styles.text}>Lion</Text>
					</View>
	 		        </TouchableOpacity> 

	 		        <TouchableOpacity 
			    		onPress={this.Earth}
			        >
						<Image source={wolf} 
						style={styles.smallButtons2}
						/>
					<View style={styles.names2}>
						<Text style={styles.text}>Wolf</Text>
					</View>
	 		        </TouchableOpacity> 

					<TouchableOpacity 
			    		onPress={this.A}
			        >
						<Image source={bear} 
						style={styles.smallButtons2}
						/>
					<View style={styles.names2}>
						<Text style={styles.text}>Polar Bear</Text>
					</View>
	 		        </TouchableOpacity>
	 		        
	 		    </View>

	 		    <View style={styles.container2}>

	 		        <TouchableOpacity 
			    		onPress={this.A}
			        >
						<Image source={tiger} 
						style={styles.smallButtons2}
						/>
					<View style={styles.names2}>
						<Text style={styles.text}>Tiger</Text>
					</View>
	 		        </TouchableOpacity>

	 		        <TouchableOpacity 
			    		onPress={this.A}
			        >
						<Image source={snake} 
						style={styles.smallButtons2}
						/>
					<View style={styles.names2}>
						<Text style={styles.text}>Snake</Text>
					</View>
	 		        </TouchableOpacity>

	 		        <TouchableOpacity 
			    		onPress={this.A}
			        >
						<Image source={elephant} 
						style={styles.smallButtons2}
						/>
					<View style={styles.names2}>
						<Text style={styles.text}>Elephant</Text>
					</View>
	 		        </TouchableOpacity> 

	 		    </View>

		</View>

   			<View style={styles.navBar}>

		    		<TouchableHighlight 
					   	style={styles.navButton}
					    onPress={() => navigation.navigate('Categories')}
					>
							<Text style={{ fontSize:20, color: "white"}}>Home</Text>
					</TouchableHighlight> 

					<TouchableHighlight
					    style={styles.navButton}
					    onPress={() => navigation.navigate('Quiz')}
					>
							<Text style={{ fontSize:20, color: "white"}}>Quiz</Text>
					</TouchableHighlight> 

    			</View>

		</ScrollView>
    </View>
  );
}


  Solar = () => {
    Linking.openURL('https://webpage.pace.edu/sc31285n/KinderAR/solar.html');
  }

  Earth = () => {
    Linking.openURL('https://webpage.pace.edu/sc31285n/KinderAR/earth.html');
  }

///Numbers Screen


function NumbersScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: '#cea2f5'}}>
    	<ScrollView>

		<View style={styles.categories}>

				<View style={styles.container1}>

					<TouchableOpacity 
			    		onPress={this.A}
			        >
						<Image source={n1} 
						style={styles.smallButtons2}
						/>
					<View style={styles.names2}>
						<Text style={styles.text}>1</Text>
					</View>
	 		        </TouchableOpacity> 

	 		        <TouchableOpacity 
			    		onPress={this.Earth}
			        >
						<Image source={n3} 
						style={styles.smallButtons2}
						/>
					<View style={styles.names2}>
						<Text style={styles.text}>3</Text>
					</View>
	 		        </TouchableOpacity> 

					<TouchableOpacity 
			    		onPress={this.A}
			        >
						<Image source={n5} 
						style={styles.smallButtons2}
						/>
					<View style={styles.names2}>
						<Text style={styles.text}>5</Text>
					</View>
	 		        </TouchableOpacity>
	 		        
	 		    </View>

	 		    <View style={styles.container2}>

	 		        <TouchableOpacity 
			    		onPress={this.A}
			        >
						<Image source={n2} 
						style={styles.smallButtons2}
						/>
					<View style={styles.names2}>
						<Text style={styles.text}>2</Text>
					</View>
	 		        </TouchableOpacity>

	 		        <TouchableOpacity 
			    		onPress={this.A}
			        >
						<Image source={n4} 
						style={styles.smallButtons2}
						/>
					<View style={styles.names2}>
						<Text style={styles.text}>4</Text>
					</View>
	 		        </TouchableOpacity>

	 		        <TouchableOpacity 
			    		onPress={this.A}
			        >
						<Image source={n6} 
						style={styles.smallButtons2}
						/>
					<View style={styles.names2}>
						<Text style={styles.text}>6</Text>
					</View>
	 		        </TouchableOpacity> 

	 		    </View>

		</View>

   			<View style={styles.navBar}>

		    		<TouchableHighlight 
					   	style={styles.navButton}
					    onPress={() => navigation.navigate('Categories')}
					>
							<Text style={{ fontSize:20, color: "white"}}>Home</Text>
					</TouchableHighlight> 

					<TouchableHighlight
					    style={styles.navButton}
					    onPress={() => navigation.navigate('Quiz')}
					>
							<Text style={{ fontSize:20, color: "white"}}>Quiz</Text>
					</TouchableHighlight> 

    			</View>

		</ScrollView>
    </View>
  );
}


  Solar = () => {
    Linking.openURL('https://webpage.pace.edu/sc31285n/KinderAR/solar.html');
  }

  Earth = () => {
    Linking.openURL('https://webpage.pace.edu/sc31285n/KinderAR/earth.html');
  }

///Flowers Screen


function FlowersScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: '#cea2f5'}}>
    	<ScrollView>

		<View style={styles.categories}>

				<View style={styles.container1}>

					<TouchableOpacity 
			    		onPress={this.A}
			        >
						<Image source={rose} 
						style={styles.smallButtons2}
						/>
					<View style={styles.names2}>
						<Text style={styles.text}>Rose</Text>
					</View>
	 		        </TouchableOpacity> 

	 		        <TouchableOpacity 
			    		onPress={this.Earth}
			        >
						<Image source={lotus} 
						style={styles.smallButtons2}
						/>
					<View style={styles.names2}>
						<Text style={styles.text}>Lotus</Text>
					</View>
	 		        </TouchableOpacity> 

					<TouchableOpacity 
			    		onPress={this.A}
			        >
						<Image source={daffodil} 
						style={styles.smallButtons2}
						/>
					<View style={styles.names2}>
						<Text style={styles.text}>Daffodil</Text>
					</View>
	 		        </TouchableOpacity>
	 		        
	 		    </View>

	 		    <View style={styles.container2}>

	 		        <TouchableOpacity 
			    		onPress={this.A}
			        >
						<Image source={sunflower} 
						style={styles.smallButtons2}
						/>
					<View style={styles.names2}>
						<Text style={styles.text}>Sunflower</Text>
					</View>
	 		        </TouchableOpacity>

	 		        <TouchableOpacity 
			    		onPress={this.A}
			        >
						<Image source={daisy} 
						style={styles.smallButtons2}
						/>
					<View style={styles.names2}>
						<Text style={styles.text}>Daisy</Text>
					</View>
	 		        </TouchableOpacity>

	 		        <TouchableOpacity 
			    		onPress={this.A}
			        >
						<Image source={lily} 
						style={styles.smallButtons2}
						/>
					<View style={styles.names2}>
						<Text style={styles.text}>Lily</Text>
					</View>
	 		        </TouchableOpacity> 

	 		    </View>

		</View>

   			<View style={styles.navBar}>

		    		<TouchableHighlight 
					   	style={styles.navButton}
					    onPress={() => navigation.navigate('Categories')}
					>
							<Text style={{ fontSize:20, color: "white"}}>Home</Text>
					</TouchableHighlight> 

					<TouchableHighlight
					    style={styles.navButton}
					    onPress={() => navigation.navigate('Quiz')}
					>
							<Text style={{ fontSize:20, color: "white"}}>Quiz</Text>
					</TouchableHighlight> 

    			</View>

		</ScrollView>
    </View>
  );
}


  Solar = () => {
    Linking.openURL('https://webpage.pace.edu/sc31285n/KinderAR/solar.html');
  }

  Earth = () => {
    Linking.openURL('https://webpage.pace.edu/sc31285n/KinderAR/earth.html');
  }

///Colors Screen


function ColorsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: '#cea2f5'}}>
    	<ScrollView>

		<View style={styles.categories}>

				<View style={styles.container1}>

					<TouchableOpacity 
			    		onPress={this.A}
			        >
						<Image source={red} 
						style={styles.smallButtons2}
						/>
					<View style={styles.names2}>
						<Text style={styles.text}>Red</Text>
					</View>
	 		        </TouchableOpacity> 

	 		        <TouchableOpacity 
			    		onPress={this.Earth}
			        >
						<Image source={blue} 
						style={styles.smallButtons2}
						/>
					<View style={styles.names2}>
						<Text style={styles.text}>Blue</Text>
					</View>
	 		        </TouchableOpacity> 

					<TouchableOpacity 
			    		onPress={this.A}
			        >
						<Image source={black} 
						style={styles.smallButtons2}
						/>
					<View style={styles.names2}>
						<Text style={styles.text}>Black</Text>
					</View>
	 		        </TouchableOpacity>
	 		        
	 		    </View>

	 		    <View style={styles.container2}>

	 		        <TouchableOpacity 
			    		onPress={this.A}
			        >
						<Image source={green} 
						style={styles.smallButtons2}
						/>
					<View style={styles.names2}>
						<Text style={styles.text}>Green</Text>
					</View>
	 		        </TouchableOpacity>

	 		        <TouchableOpacity 
			    		onPress={this.A}
			        >
						<Image source={yellow} 
						style={styles.smallButtons2}
						/>
					<View style={styles.names2}>
						<Text style={styles.text}>Yellow</Text>
					</View>
	 		        </TouchableOpacity>

	 		        <TouchableOpacity 
			    		onPress={this.A}
			        >
						<Image source={pink} 
						style={styles.smallButtons2}
						/>
					<View style={styles.names2}>
						<Text style={styles.text}>Pink</Text>
					</View>
	 		        </TouchableOpacity> 

	 		    </View>

		</View>

   			<View style={styles.navBar}>

		    		<TouchableHighlight 
					   	style={styles.navButton}
					    onPress={() => navigation.navigate('Categories')}
					>
							<Text style={{ fontSize:20, color: "white"}}>Home</Text>
					</TouchableHighlight> 

					<TouchableHighlight
					    style={styles.navButton}
					    onPress={() => navigation.navigate('Quiz')}
					>
							<Text style={{ fontSize:20, color: "white"}}>Quiz</Text>
					</TouchableHighlight> 

    			</View>

		</ScrollView>
    </View>
  );
}


  Solar = () => {
    Linking.openURL('https://webpage.pace.edu/sc31285n/KinderAR/solar.html');
  }

  Earth = () => {
    Linking.openURL('https://webpage.pace.edu/sc31285n/KinderAR/earth.html');
  }


///Navigation


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      		initialRouteName="Welcome"
			screenOptions={{
			        headerStyle: {
			          backgroundColor: '#7e07e6', ///861be3
			        },
			        headerTintColor: '#ffffff',
			        headerTitleStyle: {
			        fontSize: 25,
			        fontWeight: "300"
			        },}}
      >
        <Stack.Screen 
        	name="Welcome" 
        	component={WelcomeScreen}
        	options={{ 
        		title: 'Welcome',
        		headerShown: false
        	}}
        />
        <Stack.Screen 
        	name="Categories" 
        	component={CategoriesScreen}
        	options={{
        		title: 'Home',
        		headerLeft: null,
        	}}
        />
        <Stack.Screen
        	name="Alphabet"
        	component={AlphabetScreen}
        	options={{ title: 'Alphabet'}}
        />
        <Stack.Screen
        	name="Planets"
        	component={PlanetsScreen}
        	options={{ title: 'Planets'}}
        />
        <Stack.Screen
        	name="Fruits"
        	component={FruitsScreen}
        	options={{ title: 'Fruits'}}
        />
        <Stack.Screen
        	name="Shapes"
        	component={ShapesScreen}
        	options={{ title: 'Shapes'}}
        />
        <Stack.Screen
        	name="Animals"
        	component={AnimalsScreen}
        	options={{ title: 'Animals'}}
        />
        <Stack.Screen
        	name="Numbers"
        	component={NumbersScreen}
        	options={{ title: 'Numbers'}}
        />
        <Stack.Screen
        	name="Flowers"
        	component={FlowersScreen}
        	options={{ title: 'Flowers'}}
        />
        <Stack.Screen
        	name="Colors"
        	component={ColorsScreen}
        	options={{ title: 'Colors'}}
        />
        <Stack.Screen
        	name="Quiz"
        	component={QuizScreen}
        	options={{ title: 'Quiz'}}
        />
        <Stack.Screen
        	name="Correct"
        	component={CorrectScreen}
        	options={{ title: 'Correct',
        			   headerShown: false
        	}}
        />
        <Stack.Screen
        	name="Incorrect"
        	component={IncorrectScreen}
        	options={{ title: 'Incorrect',
        			   headerShown: false
    		}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


//StyleSheet


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    categories: {
    	flex: 1,
    	flexDirection: 'row',
    	backgroundColor: '#cea2f5', //#cea2f5
    },
    container1: {
    	flexDirection: 'column',
    	alignItems: 'center',
    	justifyContent: 'center',
    },
    container2: {
    	flexDirection: 'column',
    	alignItems: 'center',
    	justifyContent: 'center',
    },
    horizontalContainer: {
    	height: 540,
    	alignItems: 'center',
    },
    verticleContainer: {
    	flexDirection: 'column',
    	alignItems: 'center',
    	justifyContent: 'center',
    },
    smallButtons: {
    	height: 134,
    	width: 126,
    	marginTop:15,
    	marginBottom:5,
	    paddingTop:10,
	    paddingBottom:10,
	    marginLeft:30,
	    marginRight:30,
	    borderRadius:6,
	    borderWidth: 0.5,
	    borderColor: 'black'
    },
    smallButtons2: {
    	height: 250,
    	width: 156,
    	marginTop:15,
    	marginBottom:5,
	    paddingTop:10,
	    paddingBottom:10,
	    marginLeft:15,
	    marginRight:15,
	    borderRadius:5,
	    borderWidth: 0.5,
	    borderColor: 'black'
    },
    bigButtons: {
    	height: 481,
    	width: 343,
    	marginTop:25,
	    paddingTop:15,
	    paddingBottom:15,
	    marginLeft:15,
	    marginRight:15,
	    borderRadius:30,
	    borderWidth: 0.5,
	    borderColor: 'black'

    },
    roundButton: {
    	height: 50,
    	width: 50,
    	borderRadius: 100,
        flexDirection: 'column',
        alignItems: 'flex-start',
        borderWidth: 0.5,
	    borderColor: 'black',
	    marginTop: 20,
	    marginLeft: 20,
    },
    browse: {
    	alignItems: 'center',
    },
    names1: {
    	alignItems: 'center',
    	justifyContent: 'center',
    	marginTop:5,
    	marginBottom:5,
    },
    names2: {
    	alignItems: 'center',
    	justifyContent: 'center',
    	marginBottom:6,
    },
    text: {
    	color: 'black',
    	fontSize: 20,
    },
	button: {
	   alignItems: "center",
	   backgroundColor: "black",
	   marginTop: 100,
	   marginLeft: 20,
	   marginRight: 20,
	   padding: 10,
	   borderRadius:4,
	   borderWidth: 0.5,
	   borderColor: 'black',
	   width: 130,
	},
	appName: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 230,
	},
	loginBar: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	navBar: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#7e07e6',
		marginTop: 40,
	},
	navButton: {
	   alignItems: "center",
	   backgroundColor: 'black',
	   marginTop: 20,
	   marginBottom: 30,
	   marginLeft: 10,
	   marginRight: 10,
	   padding: 15,
	   borderRadius:4,
	   borderWidth: 0.5,
	   borderColor: 'black',
	   width: 130,
	},
	infoButton: {
	   alignItems: "center",
	   justifyContent: 'center',
	   backgroundColor: 'black',
	   marginTop: 20,
	   marginBottom: 30,
	   marginLeft: 10,
	   marginRight: 10,
	   padding: 15,
	   borderRadius:4,
	   borderWidth: 0.5,
	   borderColor: 'black',
	   width: 130,
	},
});



