# Be sure to restart your server when you modify this file.

# Your secret key is used for verifying the integrity of signed cookies.
# If you change this key, all old signed cookies will become invalid!

# Make sure the secret is at least 30 characters and all random,
# no regular words or you'll be exposed to dictionary attacks.
# You can use `rake secret` to generate a secure secret key.

# Make sure your secret_key_base is kept private
# if you're sharing your code publicly.
Chat::Application.config.secret_key_base = '31c43b78849043723fd0348f7e7b8778513ea97fb88d791eed36bfbb9e9560dd0f349afb3c7261e6e32fd7eb55cf216524c763600c72a32b38642aaa5c74f6b2'
