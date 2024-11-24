import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";

export default function Index() {
  return (
    <View>
      <Image
        style={{
          width: "100%",
          height: 500,
        }}
        source={require("../../assets/images/logo-bg.jpg")}
      />
      <View>
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 30,
            textAlign: "center",
            marginTop: 20,
          }}
        >
          Welcome to 🐶 Pet Lover
        </Text>
        <Text
          style={{
            fontFamily: "outfit-me",
            fontSize: 15,
            textAlign: "center",
            marginTop: 20,
            color: Colors.GRAY,
          }}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          praesentium nisi a excepturi ipsam dolor iusto nostrum eaque placeat
          suscipit?
        </Text>

        <Pressable
        style={{
          padding: 14,
          marginTop: 100,
          backgroundColor: Colors.PRIMARY,
          width: "80%",
          borderRadius: 14,
          alignSelf: "center",
        }}
        >
          <Text
            style={{
              color: "white",
              fontFamily: "outfit-bold",
              fontSize: 15,
              textAlign: "center",
            }}
          >
            Get Started
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
