// @flow

export type Status = {
  created_at: string;
  id: number;
  id_str: string;
  text: string;
  truncated: boolean;
  entities: Array<Object>;
  source: string;
  in_reply_to_status_id: ?number;
  in_reply_to_status_id_str: ?string;
  in_reply_to_user_id: ?number;
  in_reply_to_user_id_str: ?string;
  in_reply_to_screen_name: ?string;
  geo: ?string;
  coordinates: ?string;
  place: ?string;
  contributors: ?string;
  is_quote_status: boolean;
  retweet_count: number;
  favorite_count: number;
  favorited: boolean;
  retweeted: boolean;
  possibly_sensitive: boolean;
  lang: string;
};
