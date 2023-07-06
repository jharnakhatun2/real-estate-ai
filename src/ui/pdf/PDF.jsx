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
    marginTop: 4,
    marginLeft: 12,
    marginRight: 12,
    marginBottom: 12,
    fontSize: 14,
    textAlign: "justify",
  },
  heading: {
    marginLeft: 12,
    marginRight: 12,
    marginBottom: 12,
    fontSize: 16,
    fontWeight: "bold"
  }
});

export default function PDFFile({ image, text, valuationCost }) {
  return (
    <Document>
      <Page>
        <View style={styles.section}>
          {image && <Image style={styles.image} src={image} />}
          <Text style={styles.heading}>Valuation Cost: {valuationCost}</Text>
          <Text style={styles.text}>{text}</Text>
        </View>
      </Page>
    </Document>
  )
}