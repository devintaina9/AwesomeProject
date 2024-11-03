/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

import type {Node} from 'react';

import TouchableOpacity from '../../Components/Touchable/TouchableOpacity';
import View from '../../Components/View/View';
import openURLInBrowser from '../../Core/Devtools/openURLInBrowser';
import StyleSheet from '../../StyleSheet/StyleSheet';
import Text from '../../Text/Text';
import useColorScheme from '../../Utilities/useColorScheme';
import Colors from './Colors';
import React, {Fragment} from 'react';
import { FontAwesomeIcon } from '../../../../@fortawesome/react-native-fontawesome'
import { faMugSaucer } from '../../../../@fortawesome/free-solid-svg-icons/faMugSaucer'
import { faInstagram, faGithub, faXTwitter, faLinkedin } from '../../../../@fortawesome/free-brands-svg-icons'


const links = [
  {
    id: 1,
    title: faInstagram,
    link: 'https://www.instagram.com/devintacahaya16?igsh=bmJpZTZtM2l3emp3',
    description: 'https://www.instagram.com/devintacahaya16?igsh=bmJpZTZtM2l3emp3',
  },
  {
    id: 2,
    title: faGithub,
    link: 'https://github.com/devintaina9/',
    description: 'https://github.com/devintaina9/',
  },
  {
    id: 3,
    title: faXTwitter,
    link: 'https://www.twitter.com',
    description: 'https://www.twitter.com',
  },
  {
    id: 4,
    title: faLinkedin,
    link: 'https://www.linkedin.com',
    description: 'https://www.linkedin.com',
  }
];


const LinkList = (): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.container}>
      {links.map(({id, title, link, description}) => (
        <Fragment key={id}>
          <View
            style={[
              styles.separator,
              {
                backgroundColor: isDarkMode ? Colors.dark : Colors.light,
              },
            ]}
          />
          <TouchableOpacity
            accessibilityRole="button"
            onPress={() => openURLInBrowser(link)}
            style={styles.linkContainer}>
           {/*<Text style={styles.link}>{title}</Text>*/}

         <View style={styles.link}>
               <FontAwesomeIcon icon={title} size={32} color='green' />
         </View>

            <Text
              style={[
                styles.description,
                {
                  color: isDarkMode ? Colors.lighter : Colors.dark,
                },
              ]}>
              {description}
            </Text>
          </TouchableOpacity>
        </Fragment>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  linkContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  link: {
    flex: 2,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.primary,
  },
  description: {
    flex: 3,
    paddingVertical: 16,
    fontWeight: '400',
    fontSize: 18,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
  },
});

export default LinkList;
