import React, { useState, useEffect } from "react";
import { Text, View, Image } from "react-native";
import moment from "moment";
import axios from "axios";
import "moment/locale/ar-ly";
import { Picker } from "@react-native-picker/picker";
import { StyleContents, StyleHeader } from "./MainScreenStyle.js";
import { fajr, dhhr, asr, sunset, night } from "../../constants";

const MainScreen = () => {
  moment.locale("ar-ly");
  const [city, setCity] = useState({
    NameCity: "مصراتة",
    OrderName: "Misrata",
  });
const [dataToday, setDataToday] = useState(
  moment().format("MMMM DD YYYY | HH:mm")
);
  const [listPrayers, setListPrayers] = useState({
    Fajr: "04:00",
    Dhuhr: "01:00",
    Asr: "04:00",
    Maghrib: "07:00",
    Isha: "09:00",
  });

  const [nextPrayer, setNextPrayer] = useState("");
  const [timer, setTimer] = useState('');


  const prayersArray = [
    { key: "Fajr", displayName: "الفجر" },
    { key: "Dhuhr", displayName: "الظهر" },
    { key: "Asr", displayName: "العصر" },
    { key: "Maghrib", displayName: "المغرب" },
    { key: "Isha", displayName: "العشاء" },
  ];
  const GetPrayers = async () => {
    await axios
      .get(
        `https://api.aladhan.com/v1/timingsByCity?city=${city.OrderName}&country=LY`
      )
      .then((response) => {
        setListPrayers(response.data.data.timings);
      })
      .catch((error) => console.log(error))

      setCountdown()
  };

  const setCountdown = () => {
    const nowTiming = moment();
    
    const IndexPrayer =
      nowTiming.isBetween(moment(listPrayers.Fajr, "HH:mm") , moment(listPrayers.Dhuhr, "HH:mm"))
        ? 1
        : nowTiming.isBetween(moment(listPrayers.Dhuhr, "HH:mm"), moment(listPrayers.Asr, "HH:mm"))
        ? 2
        : nowTiming.isBetween(moment(listPrayers.Asr, "HH:mm") , moment(listPrayers.Maghrib, "HH:mm"))
        ? 3
        : nowTiming.isBetween(moment(listPrayers.Maghrib, "HH:mm") , moment(listPrayers.Isha, "HH:mm"))
        ? 4
        : 0;
    setNextPrayer(prayersArray[IndexPrayer].displayName);
    let NextPrayerTimer = listPrayers[prayersArray[IndexPrayer].key];
    let remainingTime =
     moment(NextPrayerTimer, "hh:mm").diff(nowTiming) < 0
        ? moment("23:59:59", "hh:mm:ss").diff(nowTiming) +
          moment(NextPrayerTimer, "hh:mm").diff(moment().startOf('day'))
        : moment(NextPrayerTimer, "hh:mm").diff(nowTiming);

    let durationRemainingTime = moment.duration(remainingTime);    
    // setTimer(`${durationRemainingTime.hours()}:${durationRemainingTime.minutes()}:${durationRemainingTime.seconds()}`);
    setTimer(`${durationRemainingTime.hours().toString().padStart(2, '0')}:${durationRemainingTime.minutes().toString().padStart(2, '0')}:${durationRemainingTime.seconds().toString().padStart(2, '0')}`);
  };

useEffect(() => {
    const RealTime = moment().format("MMMM DD YYYY | h:mm");
    setDataToday(RealTime);
  
    const Temporary = setInterval(() => {
    setCountdown()
      setDataToday(moment().format("MMMM DD YYYY | h:mm"));
    }, 1000);

    return () => clearInterval(Temporary);
  }, [listPrayers]);

  useEffect(() => {

    GetPrayers();

  }, [city]);

  return (
    <View>
      <View style={StyleHeader.BasicContainer}>
        <View style={StyleHeader.Subdistrict}>
          <Text style={StyleHeader.textSmall}>{dataToday}</Text>
          <Text style={StyleHeader.textBig}>{city.NameCity}</Text>
        </View>
        <View style={StyleHeader.Subdistrict}>
          <Text style={StyleHeader.textSmall}>متبقي علي صلاة <Text style={StyleHeader.NamePayer}>{nextPrayer}</Text></Text>
          <Text style={StyleHeader.textBig}>{timer}</Text>
        </View>
      </View>

      <View style={StyleContents.ListPrayers}>
        <View style={StyleContents.PrayerCard}>
          <Image source={fajr} style={StyleContents.PrayerImage} />

          <Text style={StyleContents.PrayerName}>الفجر</Text>
          <Text style={StyleContents.PrayerTime}>{moment(listPrayers.Fajr,"HH:mm").format("hh:mm")}</Text>
        </View>
        <View style={StyleContents.PrayerCard}>
          <Image source={dhhr} style={StyleContents.PrayerImage} />

          <Text style={StyleContents.PrayerName}>الظهر</Text>
          <Text style={StyleContents.PrayerTime}>{moment(listPrayers.Dhuhr,"HH:mm").format("hh:mm")}</Text>
        </View>
        <View style={StyleContents.PrayerCard}>
          <Image source={asr} style={StyleContents.PrayerImage} />

          <Text style={StyleContents.PrayerName}>العصر</Text>
          <Text style={StyleContents.PrayerTime}>{moment(listPrayers.Asr,"HH:mm").format("hh:mm")}</Text>
        </View>
        <View style={StyleContents.PrayerCard}>
          <Image source={sunset} style={StyleContents.PrayerImage} />

          <Text style={StyleContents.PrayerName}>المغرب</Text>
          <Text style={StyleContents.PrayerTime}>{moment(listPrayers.Maghrib,"HH:mm").format("hh:mm")}</Text>
        </View>
        <View style={StyleContents.PrayerCard}>
          <Image source={night} style={StyleContents.PrayerImage} />

          <Text style={StyleContents.PrayerName}>العشاء</Text>
          <Text style={StyleContents.PrayerTime}>{moment(listPrayers.Isha,"HH:mm").format("hh:mm")}</Text>
        </View>
      </View>

      <View>
        <Picker
          onValueChange={(itemValue) => setCity(itemValue)}
        >
          <Picker.Item label="المدينة"  style={StyleHeader.textBig}/>
          <Picker.Item
            label="مصراتة" 
            value={{ NameCity: "مصراتة", OrderName: "Misrata" }}
          />
          <Picker.Item
            label="طرابلس"
            value={{ NameCity: "طرابلس", OrderName: "Tripoli" }}
          />
          <Picker.Item
            label="بنغازي"
            value={{ NameCity: "بنغازي", OrderName: "Benghazi" }}
          />
        </Picker>
      </View>
    </View>
  );
};

export default MainScreen;
