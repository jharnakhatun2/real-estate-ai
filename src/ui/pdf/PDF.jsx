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
  heading: {
    fontSize: 18,
    fontWeight: "bold"
  }
});

export default function PDFFile({ image, text, valuationCost }) {
  return (
    <Document>
      <Page>
        <View style={styles.section}>
          {image && <Image style={styles.image} src={image} />}
          <Text style={styles.heading}>{valuationCost}</Text>
          <Text style={styles.text}>{text}</Text>
        </View>
      </Page>
    </Document>
  )
}