import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export class FeedbackComponent extends React.Component {
  render() {
    return (
      <View style={FeedbackStyle.container}>
        <View style={FeedbackStyle.feedbackHead}>
          <Text style={FeedbackStyle.feedbackHeadText}>Feedbacks</Text>
          <Text style={FeedbackStyle.feedbackHeadTime}>6hour</Text>
        </View>
        <View style={FeedbackStyle.feedbackReceived}>
          <Text>{this.props.feedback}</Text>
        </View>
        <View style={FeedbackStyle.feedbackPosted}>
          <Text>{this.props.postedby}</Text>
        </View>
      </View>
    );
  }
}

const FeedbackStyle = StyleSheet.create({
  container: {
    height: 260,
    width: 250,
    borderWidth: 1,
    borderColor: 'black',
    margin: 20,
    position: 'relative',
  },
  feedbackHead: {
    height: 50,
    backgroundColor: 'yellow',
    margin: 8,
    position: 'relative',
  },
  feedbackHeadText: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    position: 'relative',
    padding: 5,
  },
  feedbackHeadTime: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'flex-end',
    position: 'absolute',
    padding: 5,
  },
  feedbackReceived: {
    height: 100,
    backgroundColor: 'gray',
    position: 'relative',
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  feedbackPosted: {
    height: 60,
    backgroundColor: 'lightpink',
    margin: 8,
  },
});
