import React, { useState } from 'react';
import { Dimensions, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BackIcon from './BackIcon';
import { Svg, Rect, Defs, Filter, Path, G, FeFlood, FeGaussianBlur, FeComposite, FeBlend, LinearGradient, Stop } from 'react-native-svg';
import GradientButton from './GradientButton';
import TableView from './TableView';


function PageContainer() {
  const { width: screenWidth } = Dimensions.get('window'); // Get screen width
  const svgWidth = screenWidth * 0.9; // Make the SVG width 90% of the screen width
  const svgHeight = (236 / 379) * svgWidth; // Maintain the aspect ratio based on the original SVG
  const DATA = [
    { id: '1', title: 'Basic' },
    { id: '2', title: 'Chart' },
    { id: '3', title: 'KP' },
    { id: '4', title: 'Ashtakvarga' },
    { id: '5', title: 'Dasha' },
    { id: '6', title: 'Report' },
  ];

  const [selectedId, setSelectedId] = useState(1);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => setSelectedId(item.id)}
      style={[
        styles.item,
      ]}
    >
      <Text style={{ color: 'white', fontWeight: selectedId == item.id ? '800' : '200' }}>{item.title}</Text>
    </TouchableOpacity>
  );

  const ItemSeparatorComponent = () => (
    <View style={styles.separator} />
  );

  const handlePress = () => {
    console.log('Button Pressed');
  };

  const sampleData = [
    { Planet: 'Ascendant', Sign: 'Pisces', SignLord: 'Jupiter', Degree: '13°13’24', House: '1' },
    { Planet: 'Ascendant', Sign: 'Pisces', SignLord: 'Jupiter', Degree: '13°13’24', House: '1' },
    { Planet: 'Ascendant', Sign: 'Pisces', SignLord: 'Jupiter', Degree: '13°13’24', House: '1' },
    { Planet: 'Ascendant', Sign: 'Pisces', SignLord: 'Jupiter', Degree: '13°13’24', House: '1' },
    { Planet: 'Ascendant', Sign: 'Pisces', SignLord: 'Jupiter', Degree: '13°13’24', House: '1' },
    { Planet: 'Ascendant', Sign: 'Pisces', SignLord: 'Jupiter', Degree: '13°13’24', House: '1' }, { Planet: 'Ascendant', Sign: 'Pisces', SignLord: 'Jupiter', Degree: '13°13’24', House: '1' }, { Planet: 'Ascendant', Sign: 'Pisces', SignLord: 'Jupiter', Degree: '13°13’24', House: '1' }, { Planet: 'Ascendant', Sign: 'Pisces', SignLord: 'Jupiter', Degree: '13°13’24', House: '1' }, { Planet: 'Ascendant', Sign: 'Pisces', SignLord: 'Jupiter', Degree: '13°13’24', House: '1' }, { Planet: 'Ascendant', Sign: 'Pisces', SignLord: 'Jupiter', Degree: '13°13’24', House: '1' },
  ];

  return (
    <ScrollView>
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 8 }}>
        <BackIcon color='white' />
        <Text style={{ color: 'white' }}>Kundali</Text>

      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={ItemSeparatorComponent}
        contentContainerStyle={styles.listContainer}
      />
      <View style={{ alignItems: 'center', paddingVertical: 20 }}>
        <Svg
          width={svgWidth}
          height={svgHeight}
          viewBox="0 0 379 236"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Defs>
            <Filter id="filter0_b_1_73" x="-25" y="-25" width="429" height="286" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <FeFlood floodOpacity="0" result="BackgroundImageFix" />
              <FeGaussianBlur in="BackgroundImageFix" stdDeviation="12.5" />
              <FeComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_73" />
              <FeBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_73" result="shape" />
            </Filter>
            <LinearGradient id="paint0_linear_1_73" x1="-97.6804" y1="35.7574" x2="253.353" y2="387.123" gradientUnits="userSpaceOnUse">
              <Stop offset="0%" stopColor="white" stopOpacity="0.08" />
              <Stop offset="100%" stopColor="white" stopOpacity="0.1" />
            </LinearGradient>
          </Defs>

          <G filter="url(#filter0_b_1_73)">
            <Rect width="379" height="236" rx="16" fill="url(#paint0_linear_1_73)" />
            <Rect x="1" y="1" width="377" height="234" rx="15" stroke="white" strokeWidth="2" />
          </G>

          <Path
            d="M188.5 2V23.5M188.5 23.5C247.5 67.5 284.9 32.4 302.5 54C325.5 76 297 97.5 341.5 119.5C293.5 139.5 324.5 170.7 302.5 183.5C270 206.5 244 169 188.5 214C142.5 172.5 104.9 200.7 76.5 183.5C55 170.479 81.5 135.5 39 119.5C84 97 51 76.5 76.5 54C102 31.5 134.5 67.5 188.5 23.5Z"
            stroke="white"
          />
          <Path d="M340 119H376.5" stroke="white" />
          <Path d="M40 119.5H2.5" stroke="white" />
          <Path d="M188.5 212.5V231.5" stroke="white" />
          <Path d="M373.5 6.5L5 228.5" stroke="white" />
          <Path d="M5.5 9L374.5 228.5" stroke="white" />
          <View style={{ width: svgWidth, height: svgHeight, justifyContent: 'center' }}>
            {/* 1 */}
            <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }} />
            {/* 2 */}
            <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: svgWidth / 2 }}>
                <View style={{ flex: 1 }}>
                </View>
                <View style={{ flex: 1 }}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Text style={{ color: 'white', fontSize: 12 }}>05</Text>
                    <View></View>
                  </View>
                </View>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: svgWidth / 2 }}>
                <View style={{ flex: 1 }}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <View />
                    <Text style={{ color: 'white', fontSize: 12 }}>05</Text>
                  </View>
                </View>
                <View style={{ flex: 1 }}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>

                    <View></View>

                  </View>
                </View>
              </View>
            </View>
            {/* 3 */}
            <View style={{ alignSelf: 'flex-end', flexDirection: 'row', justifyContent: 'space-around', width: svgWidth / 2, flex: 1, alignItems: 'center' }}>
              <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                  <View />
                  <View />
                </View>
              </View>
              <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                  <Text style={{ color: 'white', fontSize: 12 }}>Mo</Text>
                  <View></View>
                </View>
              </View>
            </View>
            {/* 4 */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: svgWidth / 2, flex: 1, alignItems: 'center' }}>
              <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                  <View />
                  <View />
                </View>
              </View>
              <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                  <View></View>
                  <Text style={{ color: 'white', fontSize: 12 }}>Ma</Text>
                </View>
              </View>
            </View>
            {/* 5 */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: svgWidth, flex: 1, alignItems: 'center' }}>
              <Text style={{ color: 'white', fontSize: 12 }}>9</Text>
              <View />
              <Text style={{ color: 'white', fontSize: 12 }}>7</Text>
              <View />
              <Text style={{ color: 'white', fontSize: 12 }}>5</Text>
            </View>
            {/* 6 */}
            <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: svgWidth / 2 }}>
                <View style={{}}>

                </View>
                <Text style={{ color: 'white', fontSize: 12 }}>Ke</Text>
                <View style={{}}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Text style={{ color: 'white', fontSize: 12 }}>10</Text>
                    <View></View>
                  </View>
                </View>
              </View>
              <View style={{ flexDirection: 'row', width: svgWidth / 4, justifyContent: 'space-around', alignItems: 'center' }}>
                <Text style={{ color: 'white', fontSize: 12 }}>4</Text>
                <Text style={{ color: 'white', fontSize: 12 }}>Ra</Text>
              </View>
            </View>
            {/* 7 */}


            <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: svgWidth, flex: 1, alignItems: 'center' }}>
              <Text style={{ color: 'white', fontSize: 12 }}>11</Text>
              <View />
              <Text style={{ color: 'white', fontSize: 12 }}>1</Text>
              <View />
              <Text style={{ color: 'white', fontSize: 12 }}>3</Text>
            </View>
            {/* 8 */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: svgWidth / 2, flex: 1, alignItems: 'center' }}>
              <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                  <View />
                  <View />
                </View>
              </View>
              <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                  <View></View>
                  <Text style={{ color: 'white', fontSize: 12 }}>Ve Sa</Text>
                </View>
              </View>
            </View>
            {/* 9*/}
            <View style={{ flexDirection: 'row', width: svgWidth, alignItems: 'center' }}>
              <Text style={{ color: 'white', fontSize: 12 }}>Me</Text>
            </View>
            {/* 10 */}
            <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: svgWidth / 2 }}>
                <View style={{}}>

                </View>
                <Text style={{ color: 'white', fontSize: 12 }}>Su Ju</Text>
                <View style={{}}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Text style={{ color: 'white', fontSize: 12 }}>10</Text>
                    <View></View>
                  </View>
                </View>
              </View>
              <View style={{ flexDirection: 'row', width: svgWidth / 4, justifyContent: 'space-around', alignItems: 'center' }}>
                <Text style={{ color: 'white', fontSize: 12 }}>12</Text>
              </View>
            </View>
            {/* 11 */}
            <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }} />
          </View>
        </Svg>
      </View >

      <View style={{ flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 10 }}>
        <GradientButton onPress={handlePress} title="Sign" />
        <GradientButton onPress={handlePress} title="Nakshatra" isSelected={true} />
      </View>
      <View style={{ alignItems: 'center', paddingVertical: 10 }}>
        <Table data={sampleData} />
      </View>
      <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white', paddingHorizontal: 20, paddingVertical: 6 }}>Understanding your Kundli</Text>
      <View style={{ flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 10 }}>
        <GradientButton onPress={handlePress} title="General" isSelected={true} />
        <GradientButton onPress={handlePress} title="Planetary" />
        <GradientButton onPress={handlePress} title="Yoga" />
      </View>
      <View style={{ borderRadius: 20, backgroundColor: 'rgba(255, 255, 255, 0.1)', flexDirection: 'column', marginHorizontal: 20, padding: 14, marginVertical: 10 }}>
        <Text style={{ fontSize: 12, fontWeight: '600', color: 'white' }}>Description</Text>
        <View style={{ height: 6 }}></View>
        <Text style={{ fontSize: 12, fontWeight: '300', color: 'white' }}>Ascendant is one of the most sought concepts in astrology when it comes to predicting the minute events in your life. At the time of birth, the sign that rises in the sky is the person's ascendant. it helps in making predictions about the minute events, unlike your moon or sun sign that help in making weekly, monthly or yearly prediction for you. Your ascendant is Pisces.</Text>
      </View>
      <View style={{ borderRadius: 20, backgroundColor: 'rgba(255, 255, 255, 0.1)', flexDirection: 'column', marginHorizontal: 20, padding: 14, marginVertical: 10 }}>
        <Text style={{ fontSize: 12, fontWeight: '600', color: 'white' }}>Description</Text>
        <View style={{ height: 6 }}></View>
        <Text style={{ fontSize: 12, fontWeight: '300', color: 'white' }}>Ascendant is one of the most sought concepts in astrology when it comes to predicting the minute events in your life. At the time of birth, the sign that rises in the sky is the person's ascendant. it helps in making predictions about the minute events, unlike your moon or sun sign that help in making weekly, monthly or yearly prediction for you. Your ascendant is Pisces.</Text>
      </View>
      <View style={{ borderRadius: 20, backgroundColor: 'rgba(255, 255, 255, 0.1)', flexDirection: 'column', marginHorizontal: 20, padding: 14, marginVertical: 10 }}>
        <Text style={{ fontSize: 12, fontWeight: '600', color: 'white' }}>Description</Text>
        <View style={{ height: 6 }}></View>
        <Text style={{ fontSize: 12, fontWeight: '300', color: 'white' }}>Ascendant is one of the most sought concepts in astrology when it comes to predicting the minute events in your life. At the time of birth, the sign that rises in the sky is the person's ascendant. it helps in making predictions about the minute events, unlike your moon or sun sign that help in making weekly, monthly or yearly prediction for you. Your ascendant is Pisces.</Text>
      </View>
      <View style={{ borderRadius: 20, backgroundColor: 'rgba(255, 255, 255, 0.1)', flexDirection: 'column', marginHorizontal: 20, padding: 14, marginVertical: 10 }}>
        <Text style={{ fontSize: 12, fontWeight: '600', color: 'white' }}>Description</Text>
        <View style={{ height: 6 }}></View>
        <Text style={{ fontSize: 12, fontWeight: '300', color: 'white' }}>Ascendant is one of the most sought concepts in astrology when it comes to predicting the minute events in your life. At the time of birth, the sign that rises in the sky is the person's ascendant. it helps in making predictions about the minute events, unlike your moon or sun sign that help in making weekly, monthly or yearly prediction for you. Your ascendant is Pisces.</Text>
      </View>
      <View style={{ borderRadius: 20, backgroundColor: 'rgba(255, 255, 255, 0.1)', flexDirection: 'column', marginHorizontal: 20, padding: 14, marginVertical: 10 }}>
        <Text style={{ fontSize: 12, fontWeight: '600', color: 'white' }}>Description</Text>
        <View style={{ height: 6 }}></View>
        <Text style={{ fontSize: 12, fontWeight: '300', color: 'white' }}>Ascendant is one of the most sought concepts in astrology when it comes to predicting the minute events in your life. At the time of birth, the sign that rises in the sky is the person's ascendant. it helps in making predictions about the minute events, unlike your moon or sun sign that help in making weekly, monthly or yearly prediction for you. Your ascendant is Pisces.</Text>
      </View>
      <View style={{ borderRadius: 20, backgroundColor: 'rgba(255, 255, 255, 0.1)', flexDirection: 'column', marginHorizontal: 20, padding: 14, marginVertical: 10 }}>
        <Text style={{ fontSize: 12, fontWeight: '600', color: 'white' }}>Description</Text>
        <View style={{ height: 6 }}></View>
        <Text style={{ fontSize: 12, fontWeight: '300', color: 'white' }}>Ascendant is one of the most sought concepts in astrology when it comes to predicting the minute events in your life. At the time of birth, the sign that rises in the sky is the person's ascendant. it helps in making predictions about the minute events, unlike your moon or sun sign that help in making weekly, monthly or yearly prediction for you. Your ascendant is Pisces.</Text>
      </View>




    </ScrollView >
  );
}

const Table = ({ data }) => {
  return (
    <View style={styles.tableContainer}>
      {/* Table Header */}
      <View style={styles.tableHeader}>
        {Object.keys(data[0]).map((header, index) => (
          <View style={styles.tableHeaderCell} key={index}>
            <Text style={styles.headerText}>{header}</Text>
          </View>
        ))}
      </View>

      {/* Table Rows */}
      <ScrollView>
        {data.map((rowData, rowIndex) => (
          <View style={styles.tableRow} key={rowIndex}>
            {Object.values(rowData).map((cellData, cellIndex) => (
              <View style={styles.tableCell} key={cellIndex}>
                <Text style={styles.cellText}>{cellData}</Text>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#013208'
  },
  appBar: {// Transparent AppBar to show animation behind it
    elevation: 0, // Remove AppBar shadow
  },
  content: {
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  text: {
    // fontSize: 18,
    // color: '#fff',
  },
  listContainer: {
    paddingHorizontal: 10,
  },
  item: {
    padding: 5,
    marginHorizontal: 5,
  },
  separator: {
    alignSelf: 'center',
    width: 1,
    backgroundColor: '#ddd',
    height: '50%',
  },
  svgBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1, // Ensure it's behind the FlatList
  },
  container2: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  tableContainer: {
    justifyContent: 'center',
    borderRadius: 10, // Border radius for the whole table component
    overflow: 'hidden', // Ensure border radius applies properly
    width: Dimensions.get('window').width * 0.9 // Responsive width
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255, 0.2)', // Semi-transparent black background
  },
  tableHeaderCell: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: 'bold',
  },
  tableRow: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // White with opacity for rows
  },
  tableCell: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cellText: {
    fontSize: 10,
    color: '#fff',
  },
});

export default PageContainer;
