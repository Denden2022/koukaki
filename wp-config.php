<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'koukaki' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'plJ$- YdY*Nqn$AfamEX,1)8IL;Oi?qb%3Bm!pPOEM$6<(BbT][QU$t]?YZN>LG/' );
define( 'SECURE_AUTH_KEY',  'e]!mK;h<!tc@4[BJPst=4r4&q[tro3<2qUD%`}`lDGXe::4*o6o KwR+SWK Hz`b' );
define( 'LOGGED_IN_KEY',    'c?L8EkE,qylBtyzveUfigC<<t1uP[$Zh/&xE-{1c|pIbr[Kw$?<>rH-GKN_`=<4k' );
define( 'NONCE_KEY',        'ATAcn8)aq .A|8N$o(@VVw>egPKY;CU#~XnzV7o*6h^[[ t+3OtwJ-K@GH|H[ :M' );
define( 'AUTH_SALT',        'muz+t1EN2cZUd@OzweH9)xt+?>=dj=5VF`E/[i(k1v`@G4IZa]p;)&(s%I(MD;/I' );
define( 'SECURE_AUTH_SALT', 'XkZu+VYDqG>EYl2E;daBI.Te31y@,.$U5;dT) s(s eYVTO@p*C:HYDp#1V]Sj|B' );
define( 'LOGGED_IN_SALT',   'xkF6aJ@n:QH}i8VZc>Z;plsCv$BzJ3X[.Ci_n8(fm^n:gF8ZLZ+MLXe@v>R,|e+B' );
define( 'NONCE_SALT',       'L(PmtlXdn)x;*|b#O7)tp/N(#+bZa~/$[,;=9[_01EPe2>/K|y|zdp. ma>^NrCt' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
