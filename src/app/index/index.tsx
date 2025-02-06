import React from "react";
import {
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Modal,
  Text,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { colors } from "@/styles/colors";

import { Categories } from "@/components/categories";
import { Link } from "@/components/link";
import { Option } from "@/components/option";

type IWebsite = {
  id: number;
  name: string;
  url: string;
}

export default function Index() {
  const [visible, setVisible] = React.useState(false);
  const [selectWebSite, setSelectWebSite] = React.useState<IWebsite>({} as IWebsite);

  const websiteData = [
    {
      id: 1,
      name: "Apple Sites",
      url: "https://apple.com"
    },
    {
      id: 2,
      name: "Microsoft",
      url: "https://microsoft.com"
    },
    {
      id: 3,
      name: "Tesla",
      url: "https://tesla.com"
    }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("@/assets/logo.png")} style={styles.logo} />

        <TouchableOpacity>
          <MaterialIcons name="add" size={32} color={colors.green[300]} />
        </TouchableOpacity>
      </View>

      <Categories />

      <FlatList
        data={websiteData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <Link
            name={item.name}
            url={item.url}
            onDetails={() => {
              setVisible(true);
              setSelectWebSite(item);
            }}
          />
        )}
        style={styles.links}
        contentContainerStyle={styles.linksContent}
      />

      <Modal transparent visible={visible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalCategory}>Curso</Text>

              <TouchableOpacity onPress={() => setVisible(false)}>
                <MaterialIcons
                  name="close"
                  size={20}
                  color={colors.gray[400]}
                />
              </TouchableOpacity>
            </View>

            <Text style={styles.modalLinkName}>{selectWebSite.name}</Text>
            <Text style={styles.modalUrl}>{selectWebSite.url}</Text>

            <View style={styles.modalFooter}>
              <Option name="Excluir" icon="delete" variant="secondary" />
              <Option name="Abrir" icon="language" />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
