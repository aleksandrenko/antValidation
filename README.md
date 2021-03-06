# antValidation (for personal use only)
Anotation Validaton

GraphQL basic types:

Int: A signed 32‐bit integer.
Float: A signed double-precision floating-point value.
String: A UTF‐8 character sequence.
Boolean: true or false.
ID: The ID scalar type represents a unique identifier, often used to refetch an object or as the key for a cache.
    The ID type is serialized in the same way as a String; however, defining it as an ID signifies that it is not
    intended to be human‐readable.

Custom types:

@Date
    @Format(mm:dd:yyyy)
    @Future: The date is valid only if in the future
    @FutureOrPresent: The date is valid only if in the future or present
    @Past: The date is valid only if in the past
    @PastOrPresent: The date is valid only if in the past or present

@Email: A text field with email validation

@File: Will show a browse UI element
@URL: A field validation url string

Additional validation:
    @Precision(10): Cam ne use for float types, specifies the digits after the decimal sign

    @Positive: Can be used for int and float
    @PositiveOrZero: Can be used for int and float
    @Negative: Can be used for int and float
    @negativeOrZero: Can be used for int and float

    @Min(1): Can be used for email, url, string, number, float
    @Max(10): Can be used for email, url, string, number, float

Custom Behavior:
    @Default(516): The ui element for this field will use this as initial value

    @NoUserInput: Will not show the field as readonly in the UI
    @NoUI: Will not render any ui for the field
