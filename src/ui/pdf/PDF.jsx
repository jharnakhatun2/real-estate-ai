import { Document, Image, Page, StyleSheet, Text, View } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
  },
});

export default function PDFFile({image, text}) {
  return (
    <Document>
      <Page>
        <View style={styles.section}>
          <Image style={styles.image} src={image} />
          <Text style={styles.text}>{text}</Text>
        </View>
      </Page>
    </Document>
  )
}